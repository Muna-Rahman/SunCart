import { betterAuth } from "better-auth";

export const auth = betterAuth({

  database: {
    provider: "sqlite",
    url: "file:dev.db",
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
      clientId: process.env.GOOGLE_CLIENT_ID || "785292155948-soi1ev3h395k9uokn5nlun09uhgsr1in.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
    },
  },

  trustedOrigins: ["http://localhost:3001", "http://localhost:3000"],
});