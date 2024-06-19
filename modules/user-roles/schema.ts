import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';
import { pgTable, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

dotenv.config();

export default {
  schema: './modules/**/schema.ts',
  out: './.drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
} as Config;

export const userRolesTable = pgTable('userRole', {
  id: text('id').primaryKey(),
  rolename: text('rolename').notNull().unique(),
  roleNickName: text('roleNickName').notNull().default(''),
});

// Use drizzle-zod to convert drizzle schema to zod schema.
// If we retrieve a record from this table, it must adhere to the ts type
export const createUserRoleSchema = createInsertSchema(userRolesTable, {
  rolename: (schema) => schema.rolename.min(6).max(255),
  roleNickName: (schema) => schema.roleNickName.min(6).max(255),
});

export type CreateUserInput = z.infer<typeof createUserRoleSchema>;
