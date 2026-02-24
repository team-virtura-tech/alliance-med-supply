const SCORE_THRESHOLD = 0.5;

export type RecaptchaVerifyResult =
  | { success: true; score: number; action: string }
  | { success: false; error: string; details?: Record<string, unknown> };

export async function verifyRecaptcha(
  token: string,
  action = 'submit'
): Promise<RecaptchaVerifyResult> {
  if (!token) {
    return { success: false, error: 'Token is required' };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('Missing reCAPTCHA secret key');
    return { success: false, error: 'Server configuration error' };
  }

  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  if (!response.ok) {
    console.error('reCAPTCHA siteverify request failed:', response.statusText);
    return { success: false, error: 'Verification failed' };
  }

  const data = await response.json();

  const isValid = data.success === true;
  const score: number = data.score ?? 0;
  const actionMatch = data.action === action;

  if (isValid && actionMatch && score >= SCORE_THRESHOLD) {
    return { success: true, score, action: data.action as string };
  }

  console.log('reCAPTCHA verification details:', {
    valid: isValid,
    score,
    actionMatch,
    expectedAction: action,
    receivedAction: data.action,
    errorCodes: data['error-codes'],
  });

  return {
    success: false,
    error: 'Verification failed',
    details: {
      valid: isValid,
      score,
      actionMatch,
      errorCodes: data['error-codes'] as unknown,
    },
  };
}
