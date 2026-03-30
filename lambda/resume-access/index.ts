import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const ses = new SESClient({ region: process.env.SES_REGION ?? process.env.AWS_REGION });
const s3 = new S3Client({});

const RESUME_BUCKET = process.env.RESUME_BUCKET!;
const RESUME_KEY = process.env.RESUME_KEY!;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL!;
const URL_EXPIRY_SECONDS = Number(process.env.URL_EXPIRY_SECONDS ?? 300);
// Comma-separated list of allowed origins, e.g. "https://example.com,http://localhost:3000"
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

function getCorsHeaders(requestOrigin?: string) {
  const origin =
    requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)
      ? requestOrigin
      : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const handler = async (event: {
  requestContext?: { http?: { method?: string } };
  httpMethod?: string;
  headers?: Record<string, string>;
  body?: string | null;
}) => {
  const method =
    event.requestContext?.http?.method ?? event.httpMethod ?? '';
  const cors = getCorsHeaders(event.headers?.origin ?? event.headers?.Origin);

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    return { statusCode: 204, headers: cors, body: '' };
  }

  if (method !== 'POST') {
    return {
      statusCode: 405,
      headers: cors,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  let email: string;
  try {
    const parsed = JSON.parse(event.body ?? '{}');
    email = (parsed.email ?? '').trim().toLowerCase();
  } catch {
    return {
      statusCode: 400,
      headers: cors,
      body: JSON.stringify({ message: 'Invalid request body' }),
    };
  }

  if (!isValidEmail(email)) {
    return {
      statusCode: 400,
      headers: cors,
      body: JSON.stringify({ message: 'Invalid email address' }),
    };
  }

  // Generate pre-signed URL
  const signedUrl = await getSignedUrl(
    s3,
    new GetObjectCommand({ Bucket: RESUME_BUCKET, Key: RESUME_KEY }),
    { expiresIn: URL_EXPIRY_SECONDS },
  );

  // Notify — await so Lambda doesn't freeze before SES completes
  console.log('Attempting SES send to:', NOTIFY_EMAIL, 'from:', NOTIFY_EMAIL);
  await ses
    .send(
      new SendEmailCommand({
        Source: NOTIFY_EMAIL,
        Destination: { ToAddresses: [NOTIFY_EMAIL] },
        Message: {
          Subject: { Data: 'RESUME REQUESTED — portfolio site' },
          Body: {
            Text: {
              Data: `${email} just requested your resume at ${new Date().toUTCString()}.`,
            },
          },
        },
      }),
    )
    .then(() => console.log('SES send succeeded'))
    .catch((err) => console.error('SES send failed:', err));

  return {
    statusCode: 200,
    headers: { ...cors, 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: signedUrl }),
  };
};
