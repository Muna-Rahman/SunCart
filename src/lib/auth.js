import { betterAuth } from "better-auth";
import { createClient } from "@libsql/client";


const libsqlClient = createClient({
  url: "file:dev.db",
});

export const auth = betterAuth({
  /
  database: {
    provider: "sqlite",
    dialect: "sqlite",
    execute: async (sql, args) => {
      const res = await libsqlClient.execute({ sql, args });
      return { rows: res.rows };
    }
  },
  

  onInit: {
    createSchema: process.env.NODE_ENV !== "production",
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});