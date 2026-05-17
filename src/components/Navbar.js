"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="navbar bg-white px-4 sm:px-8 md:px-12 h-20 border-b border-slate-50 sticky top-0 z-50 flex items-center justify-between">
      
      {}
      <div className="flex items-center gap-2">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-white border border-slate-100 rounded-2xl w-48 font-bold text-slate-700 space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>
        
        <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter text-slate-800 uppercase flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          SUNCART
        </Link>
      </div>

      {}
      <div className="flex items-center gap-4 sm:gap-6">
        <ul className="menu menu-horizontal px-1 font-bold text-slate-600 gap-6 hidden md:flex">
          <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
          <li><Link href="/profile" className="hover:text-blue-600 transition-colors">My Profile</Link></li>
        </ul>

        {}
        {session ? (
          <div className="dropdown dropdown-end flex items-center">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-slate-100 bg-slate-50 overflow-hidden flex items-center justify-center w-10 h-10">
              {session.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name || "User Avatar"} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-sm font-black text-slate-400 uppercase">
                  {session.user.name ? session.user.name.charAt(0) : "U"}
                </span>
              )}
            </div>
            
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-40 z-[1] p-4 shadow-xl border border-slate-50 bg-white rounded-2xl w-52 space-y-1">
              <div className="px-2 py-1.5 border-b border-slate-50 mb-1">
                <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Logged In As</span>
                <p className="text-sm font-black text-slate-800 truncate lowercase">{session.user?.name}</p>
              </div>
              <li><Link href="/profile" className="font-medium text-slate-600 py-2">My Profile</Link></li>
              <li><button onClick={handleLogout} className="font-bold text-red-500 hover:bg-red-50 py-2 rounded-xl">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-sm sm:btn-md bg-slate-900 border-none text-white rounded-xl sm:rounded-2xl font-bold px-4 sm:px-6">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}