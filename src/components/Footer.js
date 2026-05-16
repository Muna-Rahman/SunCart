"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6 md:px-12 lg:px-24 text-slate-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {}
        <div className="space-y-3">
          <h3 className="text-lg font-black tracking-tight text-slate-800 uppercase">SUNCART</h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xs">
            Premium handpicked summer collections explicitly matching modern editorial aesthetic frameworks.
          </p>
        </div>

        {}
        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Legal & Resource</h4>
          <ul className="space-y-1.5 text-sm font-semibold">
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cookie Policies</Link></li>
          </ul>
        </div>

        {}
        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Contact Desk</h4>
          <p className="text-sm font-semibold text-slate-500">
            Email: support@suncart-store.com <br />
            Hotline: +880 1700-000000 <br />
            Sylhet, Bangladesh
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-50 mt-10 pt-6 text-center text-xs font-bold text-slate-400 tracking-wider uppercase">
        © {new Date().getFullYear()} SunCart Inc.
      </div>
    </footer>
  );
}