import { createClient } from "@libsql/client";

const db = createClient({
  url: "file:dev.db",
});

async function main() {
  console.log("Dropping older configurations and resetting tables...");
  
  try {
   
    await db.execute(`DROP TABLE IF EXISTS verification;`);
    await db.execute(`DROP TABLE IF EXISTS account;`);
    await db.execute(`DROP TABLE IF EXISTS session;`);
    await db.execute(`DROP TABLE IF EXISTS user;`);


    await db.execute(`
      CREATE TABLE user (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        emailVerified INTEGER NOT NULL,
        image TEXT,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL
      );
    `);
    console.log("'user' table initialized cleanly.");


    await db.execute(`
      CREATE TABLE session (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
        token TEXT NOT NULL UNIQUE,
        expiresAt INTEGER NOT NULL,
        ipAddress TEXT,
        userAgent TEXT,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL
      );
    `);
    console.log("'session' table initialized cleanly.");

   
    await db.execute(`
      CREATE TABLE account (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
        accountId TEXT NOT NULL,
        providerId TEXT NOT NULL,
        accessToken TEXT,
        refreshToken TEXT,
        idToken TEXT,
        accessTokenExpiresAt INTEGER,
        refreshTokenExpiresAt INTEGER,
        scope TEXT,
        password TEXT,
        createdAt INTEGER NOT NULL,
        updatedAt INTEGER NOT NULL
      );
    `);
    console.log("'account' table initialized cleanly.");

    
    await db.execute(`
      CREATE TABLE verification (
        id TEXT PRIMARY KEY,
        identifier TEXT NOT NULL,
        value TEXT NOT NULL,
        expiresAt INTEGER NOT NULL,
        createdAt INTEGER,
        updatedAt INTEGER
      );
    `);
    console.log("'verification' table initialized cleanly.");
    
    console.log("Database reset completely! Tables are fully structured.");
  } catch (error) {
    console.error("Database initialization error:", error);
  }
}

main();