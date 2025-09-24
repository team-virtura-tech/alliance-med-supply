import { NextResponse } from 'next/server';

type GoogleReview = {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  time?: number;
};

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.ALLIANCE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_MAPS_API_KEY or ALLIANCE_PLACE_ID' },
      { status: 500 }
    );
  }

  // Request only what we need (keeps payload small = cheaper/faster)
  const fields = [
    'name',
    'place_id',
    'url',
    'rating',
    'user_ratings_total',
    'editorial_summary',
    'reviews',
  ].join('%2C');

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=${fields}` +
    `&reviews_sort=newest` + // newest first (still max 5)
    `&key=${key}`;

  try {
    const resp = await fetch(url, {
      // Cache on the server for 6 hours; refresh in background
      next: { revalidate: 60 * 60 * 6 },
    });

    if (!resp.ok) {
      return NextResponse.json({ error: 'Google API error' }, { status: 502 });
    }

    const data = await resp.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json(
        { error: data.status || 'No result' },
        { status: 502 }
      );
    }

    const r = data.result;

    // Normalize + trim to the essentials you'll render
    const reviews: GoogleReview[] = Array.isArray(r.reviews)
      ? r.reviews.map((rev: GoogleReview) => ({
          author_name: rev?.author_name,
          author_url: rev?.author_url,
          profile_photo_url: rev?.profile_photo_url,
          rating: rev?.rating,
          relative_time_description: rev?.relative_time_description,
          text: rev?.text,
          time: rev?.time,
        }))
      : [];

    const payload = {
      name: r.name as string,
      url: r.url as string | undefined,
      rating: r.rating as number | undefined,
      user_ratings_total: r.user_ratings_total as number | undefined,
      editorial_summary: r.editorial_summary?.overview as string | undefined,
      html_attributions: data.html_attributions as string[] | undefined,
      reviews: reviews.slice(0, 5),
    };

    const res = NextResponse.json(payload);
    // Helpful for Vercel's CDN
    res.headers.set(
      'Cache-Control',
      's-maxage=21600, stale-while-revalidate=86400'
    );
    return res;
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
