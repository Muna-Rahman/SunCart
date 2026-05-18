import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable inside your configuration setup.");
}

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("dragon-news");

export const auth = betterAuth({
  // 🛠️ FIXED: Added the required client configuration block to enable transaction pools
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});