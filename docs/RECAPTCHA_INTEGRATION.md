# reCAPTCHA v3 Integration

This project uses Google reCAPTCHA v3 to protect the contact form from spam and abuse.

## Setup

1. **Environment Variables**
   Add the following to your `.env.local`:

   ```bash
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

2. **Google reCAPTCHA Console Setup**
   - Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
   - Create a new reCAPTCHA v3 site
   - Add your domain (localhost for development)
   - Get your Site Key and Secret Key

## Implementation Details

### Files Structure

- `src/hooks/useRecaptcha.ts` - Custom hook for reCAPTCHA execution
- `src/app/api/verify-recaptcha/route.ts` - Server-side token verification
- `src/app/api/contact/route.ts` - Contact form handler with reCAPTCHA
- `src/components/custom/ContactForm.tsx` - Updated form component

### How it Works

1. **Client-side**: When user submits the form, reCAPTCHA v3 runs invisibly and generates a token
2. **Server-side**: The token is verified against Google's siteverify API
3. **Score-based**: reCAPTCHA v3 returns a score (0.0-1.0) indicating likelihood of human behavior
4. **Action-based**: Each form submission uses a specific action (`contact_form`) for tracking

### Configuration

- **Score Threshold**: Currently set to 0.5 in `verify-recaptcha/route.ts`
- **Action**: Set to `contact_form` for the contact form
- **API Endpoint**: Standard reCAPTCHA v3 `siteverify` endpoint

### Testing

- Test with different user behaviors to see score variations
- Monitor the console logs for verification details
- Scores closer to 1.0 indicate more human-like behavior

### Security Notes

- Never expose your secret key in client-side code
- The site key is public and safe to use in frontend
- Adjust score thresholds based on your security requirements
- Monitor failed verifications for potential attacks
