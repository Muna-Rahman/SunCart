"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6 md:px-12 lg:px-24 text-slate-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div className="space-y-3">
          <h3 className="text-lg font-black tracking-tight text-slate-800 uppercase">SUNCART</h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xs">
           Premium summer collections carefully selected to match modern styles and trends.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Legal & Resource</h4>
          <ul className="space-y-1.5 text-sm font-semibold">
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-600">Contact Info</h4>
          <p className="text-sm font-semibold text-slate-500">
            Email: support@suncart-store.com <br />
            Hotline: +880 1234567890 <br />
            Sylhet, Bangladesh
          </p>
          
          {}
          <div className="flex items-center gap-3 pt-1">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://img.icons8.com/?size=100&id=mALwz43zNFpF&format=png&color=000000" alt="Facebook" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://img.icons8.com/?size=100&id=U8jER3zqhPOt&format=png&color=000000" alt="Twitter" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://img.icons8.com/?size=100&id=Lr4D9lVxxZdR&format=png&color=000000" alt="Instagram" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="https://img.icons8.com/?size=100&id=X8g2OZMx4ET5&format=png&color=000000" alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-50 mt-10 pt-6 text-center text-xs font-bold text-slate-400 tracking-wider uppercase">
        © {new Date().getFullYear()} SunCart Inc.
      </div>
    </footer>
  );
}