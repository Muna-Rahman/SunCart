import { auth } from "@/lib/auth";
import { createClient } from "@libsql/client";


const runtimeClient = createClient({
  url: "file:dev.db",
});

async function ensureVerificationTableExists() {
  try {
    await runtimeClient.execute(`
      CREATE TABLE IF NOT EXISTS verification (
        id TEXT PRIMARY KEY,
        identifier TEXT NOT NULL,
        value TEXT NOT NULL,
        expiresAt DATETIME NOT NULL,
        createdAt DATETIME,
        updatedAt DATETIME
      );
    `);
  } catch (err) {
    console.log("Verification table check bypassed or already handled.");
  }
}

export const GET = async (request) => {
  await ensureVerificationTableExists();
  return auth.handler(request);
};

export const POST = async (request) => {
  await ensureVerificationTableExists();
  return auth.handler(request);
};