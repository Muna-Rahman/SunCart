import Link from 'next/link';

export default function Footer() {
  const socialMedia = [
    { name: 'Facebook', icon: 'https://img.icons8.com/?size=100&id=FOOSCXOgTsTF&format=png&color=000000', url: '#' },
    { name: 'Instagram', icon: 'https://img.icons8.com/?size=100&id=xQDoK3WxHJ8O&format=png&color=000000', url: '#' },
    { name: 'Twitter', icon: 'https://img.icons8.com/?size=100&id=hrFp0CPfi9pR&format=png&color=000000', url: '#' },
    { name: 'YouTube', icon: 'https://img.icons8.com/?size=100&id=Bl7OpOfLTo7F&format=png&color=000000', url: '#' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-black text-summer-ocean tracking-tighter">
            SUN<span className="text-summer-sand">CART</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Your premium destination for summer essentials. We bring the sunshine to your doorstep with curated seasonal picks.
          </p>
          <div className="pt-2 space-y-2 text-sm text-slate-600">
            <p>Sylhet, BD</p>
            <p>+880 1234-567890</p>
            <p>hello@suncart.com</p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-summer-ocean">Home</Link></li>
              <li><Link href="/products" className="hover:text-summer-ocean">Products</Link></li>
              <li><Link href="/offers" className="hover:text-summer-ocean">Hot Deals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-summer-ocean">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-summer-ocean">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {}
        <div>
          <h4 className="font-bold text-slate-800 mb-4">Follow the Sun</h4>
          <p className="text-sm text-slate-500 mb-4">Join our community for summer style tips and exclusive offers.</p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="transition-transform hover:scale-110 active:scale-95"
                aria-label={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-8 h-8 opacity-80 hover:opacity-100" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} SunCart Essentials. Made for the heat.
        </p>
      </div>
    </footer>
  );
}