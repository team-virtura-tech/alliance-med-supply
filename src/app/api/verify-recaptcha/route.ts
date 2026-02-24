import { verifyRecaptcha } from '@/lib/recaptcha';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token, action = 'submit' } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token is required' },
        { status: 400 }
      );
    }

    const result = await verifyRecaptcha(token, action);

    if (result.success) {
      return NextResponse.json(result);
    }

    const status = result.error === 'Server configuration error' ? 500 : 403;
    return NextResponse.json(result, { status });
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
