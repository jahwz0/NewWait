# BLKBAR Netlify Functions

## Setup

### 1. Install dependencies
```bash
npm install @netlify/neon nodemailer
```

### 2. Environment variables
Set these in your Netlify dashboard (Site → Environment variables):

| Variable             | Description                          |
|----------------------|--------------------------------------|
| `NETLIFY_DATABASE_URL` | Your Neon connection string        |
| `GMAIL_USER`         | Gmail address used to send emails    |
| `GMAIL_APP_PASSWORD` | Gmail App Password (not your login)  |
| `BASE_URL`           | Your site URL e.g. https://blkbar.co |

### 3. File structure
```
your-new-repo/
├── netlify.toml
├── netlify/
│   └── functions/
│       ├── add-to-waitlist.mjs
│       └── unsubscribe.mjs
└── package.json
```

## Endpoints

| Function          | Method | Path                                        |
|-------------------|--------|---------------------------------------------|
| Add to waitlist   | POST   | `/.netlify/functions/add-to-waitlist`       |
| Unsubscribe       | GET    | `/.netlify/functions/unsubscribe?token=...` |

## add-to-waitlist payload
```json
{
  "email": "user@example.com",
  "role": "client",
  "privacy_consent": true
}
```
Role must be `"client"` or `"stylist"`.
