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

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('Missing reCAPTCHA secret key');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Verify with Google reCAPTCHA v3 API
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    if (!response.ok) {
      console.error('reCAPTCHA verification failed:', response.statusText);
      return NextResponse.json(
        { success: false, error: 'Verification failed' },
        { status: 500 }
      );
    }

    const data = await response.json();

    // Check if the token is valid and the score is acceptable
    const isValid = data.success === true;
    const score = data.score || 0;
    const actionMatch = data.action === action;

    // You can adjust the score threshold (0.0-1.0, higher is less risky)
    const scoreThreshold = 0.5;

    if (isValid && actionMatch && score >= scoreThreshold) {
      return NextResponse.json({
        success: true,
        score,
        action: data.action,
      });
    } else {
      console.log('reCAPTCHA verification details:', {
        valid: isValid,
        score,
        actionMatch,
        expectedAction: action,
        receivedAction: data.action,
        errorCodes: data['error-codes'],
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Verification failed',
          details: {
            valid: isValid,
            score,
            actionMatch,
            errorCodes: data['error-codes'],
          },
        },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
