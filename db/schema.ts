import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const waitlist = pgTable("waitlist", {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  userType: text("user_type").notNull(),
  privacyConsent: boolean("privacy_consent").notNull(),
  consentTimestamp: timestamp("consent_timestamp").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mailingList = pgTable("mailing_list", {
  id: serial().primaryKey(),
  email: text().notNull(),
  unsubscribeToken: text("unsubscribe_token").unique(),
  unsubscribedAt: timestamp("unsubscribed_at"),
});
