import { contact } from '@/data/contact';

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const ConfirmationEmail = ({
  firstName,
  subject,
  message,
}: {
  firstName: string;
  subject: string;
  message: string;
}) => {
  const safeFirstName = escapeHtml(firstName);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #111827;
            margin: 0;
            padding: 0;
            background-color: #f3f4f6;
          }
          .container {
            max-width: 600px;
            margin: 32px auto;
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #0d9488;
            padding: 32px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
          }
          .content {
            padding: 36px 32px;
          }
          .content p {
            margin: 0 0 16px 0;
            font-size: 15px;
            color: #1f2937;
          }
          .content p:last-child {
            margin-bottom: 0;
          }
          .subject-block {
            border-left: 3px solid #0d9488;
            background-color: #f9fafb;
            padding: 14px 18px;
            border-radius: 0 6px 6px 0;
            margin: 20px 0;
          }
          .subject-label {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #0d9488;
            margin: 0 0 4px 0;
          }
          .subject-value {
            font-size: 14px;
            font-weight: 500;
            color: #111827;
            margin: 0;
          }
          .divider {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 28px 0;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 32px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
          }
          .footer-company {
            font-size: 14px;
            font-weight: 600;
            color: #111827;
            margin: 0 0 4px 0;
          }
          .footer-tagline {
            font-size: 13px;
            color: #6b7280;
            margin: 0 0 12px 0;
          }
          .footer-note {
            font-size: 11px;
            color: #9ca3af;
            margin: 0;
          }
          .contact-block {
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 16px 20px;
            margin: 20px 0;
          }
          .contact-block-title {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #0d9488;
            margin: 0 0 10px 0;
          }
          .contact-item {
            font-size: 14px;
            color: #1f2937;
            margin: 0 0 6px 0;
          }
          .contact-item:last-child {
            margin-bottom: 0;
          }
          .contact-item a {
            color: #0d9488;
            text-decoration: none;
            font-weight: 500;
          }
          .message-label {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #0d9488;
            margin: 0 0 8px 0;
          }
          .message-value {
            font-size: 14px;
            color: #1f2937;
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.7;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Message Received</h1>
          </div>

          <div class="content">
            <p>Hi ${safeFirstName},</p>
            <p>Thank you for reaching out to <strong>Alliance Medical Supply</strong>. We have received your message and a member of our team will be in touch shortly.</p>

            <div class="subject-block">
              <p class="subject-label">Your subject</p>
              <p class="subject-value">${safeSubject}</p>
            </div>

            <div class="subject-block">
              <p class="subject-label">Your message</p>
              <p class="subject-value" style="white-space: pre-wrap; word-wrap: break-word; line-height: 1.7;">${safeMessage}</p>
            </div>

            <p>We aim to respond to all inquiries within 24 to 48 business hours. For urgent matters, please reach us directly:</p>

            <div class="contact-block">
              <p class="contact-block-title">Contact Us</p>
              <p class="contact-item">Phone: <a href="${contact.phone.href}">${contact.phone.display}</a></p>
              <p class="contact-item">Email: <a href="${contact.email.href}">${contact.email.primary}</a></p>
            </div>

            <hr class="divider" />

            <p style="color: #374151;">Warm regards,<br /><strong style="color: #111827;"><a href="https://www.alliancemedsupply.com/" style="color: #0d9488; text-decoration: none;">Alliance Medical Supply</a></strong></p>
          </div>

          <div class="footer">
            <p class="footer-company">Alliance Medical Supply</p>
            <p class="footer-tagline">Professional Medical Equipment &amp; Rental Services</p>
            <p class="footer-note">You received this email because you submitted a contact form on our website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
