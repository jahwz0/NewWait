CREATE TABLE "mailing_list" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL,
	"unsubscribe_token" text UNIQUE,
	"unsubscribed_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL UNIQUE,
	"user_type" text NOT NULL,
	"privacy_consent" boolean NOT NULL,
	"consent_timestamp" timestamp DEFAULT now(),
	"created_at" timestamp DEFAULT now()
);
