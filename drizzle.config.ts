import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

export default {
  schema: './modules/**/schema.ts',
  out: './.drizzle',
  driver: 'pg',
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || '',
  },
  url: process.env.DATABASE_URL || '',
} satisfies Config;
