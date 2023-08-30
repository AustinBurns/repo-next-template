import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { type } from "os";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  first_name: text("first_name"),
  last_name: text("last_name"),
});

export type User = typeof users.$inferSelect;
