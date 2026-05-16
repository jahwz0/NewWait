import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import sql from '@/lib/db';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting: IP -> { count, resetAt }
const rateLimitMap = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientEmail(email) {
  return {
    from: 'BlkBar <onboarding@resend.dev>',
    to: email,
    subject: "You're on the BlkBar waitlist",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#000;color:#fff;">
        <h1 style="font-size:24px;margin-bottom:16px;">Welcome to BlkBar.</h1>
        <p style="color:#ccc;line-height:1.6;">
          You're on the list as a <strong>Client</strong>. We're building a space for organic discovery
          and instant booking with stylists who get it. We'll reach out when you're up.
        </p>
        <p style="color:#666;font-size:13px;margin-top:32px;">— The BlkBar Team</p>
      </div>
    `,
  };
}

function stylistEmail(email) {
  return {
    from: 'BlkBar <onboarding@resend.dev>',
    to: email,
    subject: "You're on the BlkBar waitlist",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#000;color:#fff;">
        <h1 style="font-size:24px;margin-bottom:16px;">Welcome to BlkBar.</h1>
        <p style="color:#ccc;line-height:1.6;">
          You're on the list as a <strong>Stylist</strong>. Direct client access without the social media
          noise — that's what we're building. We'll be in touch soon.
        </p>
        <p style="color:#666;font-size:13px;margin-top:32px;">— The BlkBar Team</p>
      </div>
    `,
  };
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { email, role, privacyConsent } = body;

  if (!email || !EMAIL_REGEX.test(email) || email.length > 255) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }
  if (!['client', 'stylist'].includes(role)) {
    return NextResponse.json({ error: 'Please select a role.' }, { status: 400 });
  }
  if (!privacyConsent) {
    return NextResponse.json({ error: 'You must agree to the privacy policy.' }, { status: 400 });
  }

  try {
    const existing = await sql`SELECT id FROM waitlist WHERE email = ${email}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: 'This email is already on the waitlist.' }, { status: 400 });
    }

    await sql`
      INSERT INTO waitlist (email, role, privacy_consent, created_at)
      VALUES (${email}, ${role}, ${privacyConsent}, NOW())
    `;

    const emailData = role === 'stylist' ? stylistEmail(email) : clientEmail(email);
    try {
      await resend.emails.send(emailData);
    } catch (emailErr) {
      console.error('Email send failed:', emailErr);
      // Don't block signup on email failure
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Waitlist error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
