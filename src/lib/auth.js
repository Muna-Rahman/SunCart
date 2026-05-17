import { betterAuth } from "better-auth";

export const auth = betterAuth({
  
  database: {
    provider: "sqlite",
    url: "file:dev.db"
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

  trustedOrigins: ["http://localhost:3001", "http://localhost:3000"],
});