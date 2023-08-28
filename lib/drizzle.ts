import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

const client = postgres({ host: connectionString });
export const drizzleDb: PostgresJsDatabase<TSchema> = drizzle(client);
