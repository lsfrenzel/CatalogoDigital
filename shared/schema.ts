import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  phone: text("phone").default(""),
  systemOfInterest: text("system_of_interest").default(""),
  message: text("message").default(""),
  acceptsMarketing: text("accepts_marketing").default("false"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(2, "Nome da empresa deve ter pelo menos 2 caracteres").max(100, "Nome da empresa deve ter no máximo 100 caracteres"),
  phone: z.string().max(20, "Telefone deve ter no máximo 20 caracteres").optional(),
  systemOfInterest: z.string().optional(),
  message: z.string().max(1000, "Mensagem deve ter no máximo 1000 caracteres").optional(),
  acceptsMarketing: z.enum(["true", "false"]).default("false"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
