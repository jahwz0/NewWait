import { neon } from "@netlify/neon";

const sql = neon();

export const handler = async (event) => {
  const token = event.queryStringParameters?.token;

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid unsubscribe link" }),
    };
  }

  try {
    const result = await sql`
      UPDATE Black_Bar_Backend.Mailing_List
      SET unsubscribed_at = NOW()
      WHERE unsubscribe_token = ${token}
      RETURNING email
    `;

    if (result.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Token not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: `
        <html>
          <body style="font-family:Arial,sans-serif;text-align:center;padding:60px;">
            <h2>You've been unsubscribed 🖤</h2>
            <p>You won't receive any more emails from BLKBAR.</p>
            <a href="https://blkbar.co">Back to BLKBAR</a>
          </body>
        </html>
      `,
    };
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to unsubscribe" }),
    };
  }
};
