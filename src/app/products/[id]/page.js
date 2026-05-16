"use client";

import { use, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import productsData from "@/app/data/products.json";

export default function ProductDetailsPage({ params: paramsPromise }) {
  const router = useRouter();
  const currentPath = usePathname();
  const params = use(paramsPromise);
  
  const { data: session, isPending } = authClient.useSession();
  const [product, setProduct] = useState(null);


  const imageAssetMap = {
    1: "https://4sighteyecare.com/wp-content/uploads/2025/02/ethan-robertson-SYx3UCHZJlo-unsplash.jpg",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPavkKZ9_7MJe2dzgJmCDJ3De-a3GY854dA&s",
    3: "https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fcdn.beautybooth.com.bd%2Fuploads%2Fall%2FkRRNuyvmLvwO6Sc7JwFFb47qpyR1WCTV0OwUoTGi.jpg&w=1920&q=75",
    4: "https://www.samphi.re/cdn/shop/files/samphire-stripes-quick-dry-beach-towel-atlantis-navy-9.jpg?v=1743525930&width=1445",
    5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9M3jSMC9PwFU-pD3OVhaa6MrghU5lmqgqQ&s",
    6: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/61vVh6C3rvL.jpg"
  };

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id.toString() === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [params.id]);

  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(currentPath)}`);
    }
  }, [session, isPending, router, currentPath]);

  if (isPending || !session || !product) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-shadow-black"></span>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] bg-[#fafafa] py-12 md:py-20 px-4 md:px-12 flex items-center">
      <div className="max-w-6xl mx-auto bg-white rounded-[3.5rem] border border-slate-100 p-6 md:p-12 shadow-sm w-full grid md:grid-cols-12 gap-12 items-center">
        
        {}
        <div className="md:col-span-5 relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100">
          <img 
            src={imageAssetMap[product.id] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"} 
            alt={product.name} 
            className="w-full h-full object-cover absolute inset-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-sm z-10 font-black text-slate-800 flex items-center gap-1.5">
             {product.rating}
          </div>
        </div>

        {}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-950 block">
              {product.brand}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="text-4xl font-black text-black">
            ${product.price}
          </div>

          <div className="p-6 bg-[#fafafa] rounded-3xl border border-slate-100 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Seasonal Product Specification</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              {product.description || "Premium grade summer essential crafted utilizing fine, breathable raw materials. Meticulously tested to guarantee enduring personal comfort during intense tropical days."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn bg-slate-900 hover:bg-black text-white border-none rounded-2xl h-14 font-bold text-lg px-12 shadow-lg flex-1 transition-all">
              Add to cart
            </button>
            <Link href="/products" className="btn btn-outline border-2 border-slate-200 hover:border-slate-300 rounded-2xl h-14 font-bold text-lg px-8 text-slate-600 bg-white hover:bg-slate-50">
              Back To Catalog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}