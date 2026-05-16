import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import path from "path";


const dbPath = path.join(process.cwd(), "dev.db");
const db = new Database(dbPath);

export const auth = betterAuth({
  database: db,
  advanced: {
    autoSyncSchema: true
  },
  onInit: async (auth) => {
    await auth.init();
  },
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_string_32_chars_long_minimum",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
    },
  },
});