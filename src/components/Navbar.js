'use client';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Navbar() {
  // BetterAuth later ekhono add deoa hoy ni
  const user = {
    name: "Mahbuba",
    image: "https://api.dicebear.com/7.x/open-peeps/svg?seed=Mahbuba&face=variant02,smile01&clothe=shirt" 
  }; 

  return (
    <div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-[100] px-4 md:px-12 border-b border-slate-100">
      <div className="navbar-start">
        <Link href="/" className="group flex items-center gap-1">
          <div className="w-10 h-10">
             {}
            <DotLottieReact
              src="https://lottie.host/83d2d730-97ca-44d1-8505-3daf48f7d590/WO30m4J4tA.lottie"
              loop
              autoplay
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-800 group-hover:text-summer-ocean transition-colors">
            SUN<span className="text-summer-sand">CART</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-slate-600 gap-2">
          <li><Link href="/" className="hover:text-summer-ocean">Home</Link></li>
          <li><Link href="/products" className="hover:text-summer-ocean">Products</Link></li>
          {user && <li><Link href="/profile" className="hover:text-summer-ocean">My Profile</Link></li>}
        </ul>
      </div>

      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-summer-sun overflow-hidden">
              <div className="w-10">
                <img alt="User Profile" src={user.image} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-52 border border-slate-100">
              <li className="menu-title text-slate-400">Hi, {user.name}</li>
              <li><Link href="/profile">My Settings</Link></li>
              <li><button className="text-error font-bold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm font-bold">Login</Link>
            <Link href="/register" className="btn btn-sm bg-summer-ocean border-none text-white px-6 rounded-full hover:shadow-lg transition-all">
              Join Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}