"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import LottieHero from "@/components/LottieHero";

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
        
        {/* Layered Stack Container */}
        <div className="relative w-80 h-80 flex flex-col items-center justify-center select-none">
          
          {/* Lottie Animation in the Background layer */}
          <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none scale-110">
            <LottieHero url="https://lottie.host/83d2d730-97ca-44d1-8505-3daf48f7d590/WO30m4J4tA.lottie" />
          </div>
          
          {/* Typography stacked directly over the Lottie image layer */}
          <div className="relative z-10 space-y-2 px-4 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">
              Access Denied
            </h2>
            <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
              Please log in to view your profile management dashboard.
            </p>
          </div>

        </div>

        <Link href="/login" className="btn bg-slate-900 border-none text-white rounded-2xl px-10 h-12 font-bold shadow-lg transition-transform hover:scale-105 mt-6 z-20">
          Go to Login
        </Link>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-[80vh] bg-[#fafafa] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none translate-x-4 -translate-y-4">
          <LottieHero url="https://lottie.host/b63f60fb-8dec-423f-b3ef-8464df088475/hPhKn6ytcd.lottie" />
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-slate-50 flex items-center justify-center">
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
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              {user.name}
            </h1>
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
              {user.email}
            </p>
          </div>

          <div className="w-full pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile/update" className="btn bg-slate-900 hover:bg-summer-ocean border-none text-white px-8 rounded-2xl font-bold h-12 shadow-md">
              Update Information
            </Link>
            <Link href="/" className="btn btn-outline border-2 border-slate-200 rounded-2xl px-8 h-12 hover:bg-slate-50 hover:text-slate-800">
              Back Home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}