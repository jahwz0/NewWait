import { neon } from "@netlify/neon";
import nodemailer from "nodemailer";

const sql = neon();

/* ----------------------------- CONFIG ----------------------------- */

const MAX_REQUESTS_PER_IP = 5; // Per hour
const requestCounts = new Map(); // In-memory rate limiting (use Redis for production)

/* ----------------------------- Email Templates ----------------------------- */

const baseWrapper = (content, email) => `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:32px;font-family:Arial, sans-serif;">
        <tr>
          <td align="center" style="padding-bottom:24px;">
            <img src="https://blkbar.co/bblogo.png" alt="BLKBAR" width="120" />
          </td>
        </tr>
        <tr>
          <td style="color:#111;font-size:16px;line-height:1.6;">
            ${content}
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top:32px;">
            <a href="https://instagram.com/blkbar1">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" alt="Instagram" />
            </a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top:24px;font-size:12px;color:#999;">
            <a href="${process.env.BASE_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color:#999;">
              Unsubscribe
            </a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding-top:12px;font-size:11px;color:#999;">
            <a href="${process.env.BASE_URL}/privacy" style="color:#999;">Privacy Policy</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

const clientEmailTemplate = (email) => baseWrapper(`
  <p><strong>Thanks for joining the waitlist!</strong></p>
  <p>
    We know the struggle: hours spent scrolling through hashtags just to
    find a braider or barber nearby.
  </p>
  <p>
    <strong>BlkBar</strong> is changing that. We're building a dedicated
    home for Afrocentric beauty where discovery is organic and booking
    is instant.
  </p>
  <p>
    <strong>What's next?</strong><br />
    We'll reach out soon with an exclusive first look at the platform
    and event invites.
  </p>
  <p>
    In the meantime, follow us on our socials for a sneak peek at the
    talent joining the community.
  </p>
  <p style="margin-top:24px;">
    Welcome to the family,<br />
    <strong>The BLKBAR Team</strong>
  </p>
`, email);

const stylistEmailTemplate = (email) => baseWrapper(`
  <p><strong>Instagram likes are great, but bookings are better.</strong></p>
  <p>
    You're officially on the waitlist for <strong>BlkBar</strong>.
  </p>
  <p>
    We're cutting out the noise and putting your portfolio directly
    in front of clients who are ready to book now.
  </p>
  <p>
    No more "DM for price". No more lost inquiries.
  </p>
  <p>
    Keep an eye on your inbox — we'll be onboarding our founding
    stylists in the near future.
  </p>
  <p style="margin-top:24px;">
    Stay bold,<br />
    <strong>The BLKBAR Team</strong>
  </p>
`, email);

/* ----------------------------- Nodemailer Setup ----------------------------- */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/* ----------------------------- Helper Functions ----------------------------- */

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.length <= 255;
};

const getClientIP = (event) => {
  return (
    event.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    event.headers["client-ip"] ||
    "unknown"
  );
};

const checkRateLimit = (ip) => {
  const now = Date.now();
  const hourAgo = now - 3600000;

  for (const [key, timestamps] of requestCounts.entries()) {
    requestCounts.set(key, timestamps.filter((t) => t > hourAgo));
    if (requestCounts.get(key).length === 0) requestCounts.delete(key);
  }

  const ipRequests = requestCounts.get(ip) || [];
  if (ipRequests.length >= MAX_REQUESTS_PER_IP) return false;

  ipRequests.push(now);
  requestCounts.set(ip, ipRequests);
  return true;
};

/* ----------------------------- Netlify Function ----------------------------- */

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const clientIP = getClientIP(event);
  if (!checkRateLimit(clientIP)) {
    return {
      statusCode: 429,
      headers,
      body: JSON.stringify({ error: "Too many requests. Please try again later." }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const { email, role, privacy_consent } = data;
  const user_type = role;

  if (!email || !user_type) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Email and role are required" }),
    };
  }

  if (!isValidEmail(email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid email format" }),
    };
  }

  if (!["client", "stylist"].includes(user_type)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Role must be 'client' or 'stylist'" }),
    };
  }

  if (!privacy_consent) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "You must agree to the privacy policy" }),
    };
  }

  try {
    const existing = await sql`
      SELECT email FROM Black_Bar_Backend.waitlist
      WHERE email = ${email}
      LIMIT 1
    `;

    if (existing.length > 0) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: "You're already on the waitlist!" }),
      };
    }

    await sql`
      INSERT INTO Black_Bar_Backend.waitlist
        (email, user_type, privacy_consent, consent_timestamp, created_at)
      VALUES (${email}, ${user_type}, ${privacy_consent}, NOW(), NOW())
    `;

    const subject =
      user_type === "client"
        ? "You're in. Let's change how we do hair."
        : "Ready to fill your chair? 🪑";

    const html =
      user_type === "client"
        ? clientEmailTemplate(email)
        : stylistEmailTemplate(email);

    try {
      await transporter.sendMail({
        from: `"BLKBAR" <${process.env.GMAIL_USER}>`,
        to: email,
        subject,
        html,
      });
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          warning: "Added to waitlist but email delivery failed. We'll follow up manually.",
        }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Welcome to BLKBAR! Check your email." }),
    };
  } catch (err) {
    console.error("Waitlist error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Something went wrong. Please try again." }),
    };
  }
};
