"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

   
    await authClient.signUp.email({
      email,
      password,
      name,
      image: photoUrl || undefined,
    }, {
      onRequest: () => {
        setLoading(true);
      },
      onSuccess: () => {
        setLoading(false);
        router.push("/login");
      },
      onError: (ctx) => {
        setLoading(false);
        setError(ctx.error.message || "Registration failed. Account might already exist.");
      }
    });
  };

  const handleGoogleLogin = async () => {
    setError("");
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    }, {
      onError: (ctx) => {
        setError(ctx.error.message || "Failed to initialize Google authentication.");
      }
    });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 bg-[#fafafa] py-12">
      <div className="w-full max-w-md bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
        
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Create Account
          </h1>
          <p className="text-sm text-slate-400 font-medium">
            Join us to explore premium seasonal collections
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mahbuba Rahman"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Profile Photo URL</span>
            </label>
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/avatar.jpg"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
            />
          </div>

          <div className="form-control w-full">
            <label className="label px-1">
              <span className="label-text font-bold text-slate-600">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="input input-bordered w-full rounded-2xl border-slate-200 focus:outline-none focus:border-summer-ocean h-12 text-sm"
              required
            />
          </div>

          {error && (
            <div className="p-4 bg-error/10 border border-error/20 text-error rounded-2xl text-red-950 text-xs font-semibold leading-relaxed">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-block bg-slate-900 hover:bg-summer-ocean border-none text-white h-12 rounded-2xl font-bold transition-all mt-4"
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Register Now"}
          </button>
        </form>

        <div className="divider my-6 text-xs font-bold text-slate-300 uppercase tracking-widest">
          or join with
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-block btn-outline border-2 border-slate-200 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300 h-12 rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors text-slate-600"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google Account
        </button>

        <p className="text-center text-sm text-slate-500 mt-6 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-summer-ocean font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}