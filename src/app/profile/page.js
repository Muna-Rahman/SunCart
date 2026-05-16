"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-summer-ocean"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="relative z-10 space-y-2 px-4">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Access Denied
          </h2>
          <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
            Please log in to view your profile management dashboard.
          </p>
        </div>
        <Link href="/login" className="btn bg-slate-900 border-none text-white rounded-2xl px-10 h-12 font-bold shadow-lg mt-6">
          Go to Login
        </Link>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-[80vh] bg-mist-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-mist-200 border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
        
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-32 h-32 rounded-[2rem] overflow-hidden border-4 shadow-xl bg-slate-50 flex items-center justify-center">
            {user.image ? (
              <img 
                src={user.image} 
                alt={user.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="text-4xl font-black text-slate-300">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl text-mist-600 font-extrabold tracking-tight">
              {user.name}
            </h1>
            <p className="text-sm text-mist-400 font-bold tracking-wider lowercase">
              {user.email}
            </p>
          </div>

          <div className="w-full pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile/update" className="btn hover:bg-mist-400 hover:bg-summer-ocean border-none hover:text-slate-800 px-8 rounded-2xl font-bold h-12 shadow-md">
              Update Information
            </Link>
            <Link href="/" className="btn btn-outline border-2 border-slate-200 rounded-2xl px-8 h-12 hover:bg-mist-400 hover:text-slate-800">
              Back Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}