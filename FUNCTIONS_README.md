# BLKBAR Netlify Functions

## Setup

### 1. Install dependencies
```bash
npm install @netlify/database drizzle-orm@beta
npm install -D drizzle-kit@beta
```

### 2. Environment variables
Set these in your Netlify dashboard (Site → Environment variables):

| Variable             | Description                          |
|----------------------|--------------------------------------|
| `RESEND_API_KEY`     | Resend API key for sending emails    |
| `BASE_URL`           | Your site URL e.g. https://blkbar.co |

### 3. File structure
```
your-new-repo/
├── netlify.toml
├── drizzle.config.ts
├── db/
│   ├── schema.ts
│   └── index.ts
├── netlify/
│   ├── database/
│   │   └── migrations/
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
