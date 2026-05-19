import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const connectionString = process.env.MONGO_URI;

if (!connectionString) {
  throw new Error("Missing MONGO_URI inside your environment configuration.");
}

const client = new MongoClient(connectionString);
const db = client.db("suncart");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

 
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});