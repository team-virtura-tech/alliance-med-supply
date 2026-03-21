const escapeHtml = (str: string) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const AdminNotificationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
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
            padding: 28px 32px;
            text-align: left;
          }
          .header-label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.75);
            margin: 0 0 6px 0;
          }
          .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
          }
          .content {
            padding: 32px;
          }
          .section-title {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #0d9488;
            margin: 0 0 12px 0;
          }
          .info-block {
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 28px;
          }
          .info-row {
            display: flex;
            padding: 11px 16px;
            border-bottom: 1px solid #f3f4f6;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-size: 13px;
            font-weight: 600;
            color: #374151;
            min-width: 90px;
            flex-shrink: 0;
          }
          .info-value {
            font-size: 13px;
            color: #111827;
            flex: 1;
            word-break: break-word;
          }
          .message-block {
            border-left: 3px solid #0d9488;
            background-color: #f9fafb;
            padding: 16px 20px;
            border-radius: 0 6px 6px 0;
            margin-bottom: 28px;
          }
          .message-block p {
            margin: 0;
            font-size: 14px;
            color: #1f2937;
            white-space: pre-wrap;
            word-wrap: break-word;
            line-height: 1.7;
          }
          .action-note {
            font-size: 13px;
            font-weight: 500;
            color: #0d9488;
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px 32px;
            border-top: 1px solid #e5e7eb;
            font-size: 12px;
            color: #9ca3af;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p class="header-label">Alliance Medical Supply</p>
            <h1>New Contact Form Submission</h1>
          </div>

          <div class="content">
            <p class="section-title">Submission Details</p>

            <div class="info-block">
              <div class="info-row">
                <span class="info-label">Name</span>
                <span class="info-value">${safeFirstName} ${safeLastName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email</span>
                <span class="info-value"><a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none;">${safeEmail}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">Phone</span>
                <span class="info-value"><a href="tel:${safePhone}" style="color: #0d9488; text-decoration: none;">${safePhone}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">Subject</span>
                <span class="info-value">${safeSubject}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Submitted</span>
                <span class="info-value">${submittedAt}</span>
              </div>
            </div>

            <p class="section-title">Message</p>
            <div class="message-block">
              <p>${safeMessage}</p>
            </div>

            <p class="action-note">Please review this inquiry and respond to the customer at your earliest convenience.</p>
          </div>

          <div class="footer">
            <p style="margin: 0;">This notification was generated automatically from the contact form on your website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
