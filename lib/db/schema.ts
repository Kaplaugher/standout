import { pgTable, text, timestamp, json } from 'drizzle-orm/pg-core'

export const UserProfile = pgTable('user_profile', {
  user_id: text('user_id').primaryKey().notNull(),
  create_ts: timestamp('create_ts').defaultNow().notNull(),
  update_ts: timestamp('update_ts').defaultNow().notNull(),
  full_name: text('full_name'),
  headline: text('headline'),
  bio: text('bio'),
  location: text('location'),
  social_links: json('social_links').$type<{
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
  }>(),
  resume_url: text('resume_url'),
  video_url: text('video_url'),
  skills: json('skills').$type<string[]>(),
  
})