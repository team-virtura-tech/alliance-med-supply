import { NextResponse } from 'next/server';

// ─── New Places API (v1) types ───────────────────────────────────────────────

type PlacesReview = {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

type PlacesResponse = {
  displayName?: { text?: string; languageCode?: string };
  id?: string;
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  editorialSummary?: { text?: string; languageCode?: string };
  reviews?: PlacesReview[];
};

// ─── Normalise into the shape the front-end already expects ──────────────────

type NormalisedReview = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
};

function normaliseReview(r: PlacesReview): NormalisedReview {
  return {
    author_name: r.authorAttribution?.displayName ?? 'Anonymous',
    author_url: r.authorAttribution?.uri,
    profile_photo_url: r.authorAttribution?.photoUri,
    rating: r.rating ?? 5,
    relative_time_description: r.relativePublishTimeDescription,
    text: r.text?.text ?? '',
    time: r.publishTime
      ? Math.floor(new Date(r.publishTime).getTime() / 1000)
      : undefined,
  };
}

// ─── Route handler ───────────────────────────────────────────────────────────

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.ALLIANCE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_MAPS_API_KEY or ALLIANCE_PLACE_ID' },
      { status: 500 }
    );
  }

  // Places API (New) endpoint
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?key=${key}`;

  // Only request the fields we use — keeps cost + payload minimal
  const fieldMask = [
    'displayName',
    'id',
    'googleMapsUri',
    'rating',
    'userRatingCount',
    'editorialSummary',
    'reviews',
  ].join(',');

  try {
    const resp = await fetch(url, {
      headers: {
        'X-Goog-FieldMask': fieldMask,
      },
      // Cache on server for 6 hours; refresh in background
      next: { revalidate: 60 * 60 * 6 },
    });

    if (!resp.ok) {
      const body = await resp.json().catch(() => ({}));
      console.error('Google Places API error:', resp.status, body);
      return NextResponse.json(
        {
          error: body?.error?.message || 'Google API error',
          details: body?.error?.message,
        },
        { status: 502 }
      );
    }

    const data: PlacesResponse = await resp.json();

    const reviews = (data.reviews ?? []).map(normaliseReview).slice(0, 5);

    const payload = {
      name: data.displayName?.text,
      place_id: data.id,
      url: data.googleMapsUri,
      rating: data.rating,
      user_ratings_total: data.userRatingCount,
      editorial_summary: data.editorialSummary?.text,
      reviews,
    };

    const res = NextResponse.json(payload);
    res.headers.set(
      'Cache-Control',
      's-maxage=21600, stale-while-revalidate=86400'
    );
    return res;
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
