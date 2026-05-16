"use client";

import Link from "next/link";
import productsData from "../data/products.json";

export default function ProductsCatalogPage() {
  const imageAssetMap = {
  1: "https://4sighteyecare.com/wp-content/uploads/2025/02/ethan-robertson-SYx3UCHZJlo-unsplash.jpg",
  2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPavkKZ9_7MJe2dzgJmCDJ3De-a3GY854dA&s",
  3: "https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fcdn.beautybooth.com.bd%2Fuploads%2Fall%2FkRRNuyvmLvwO6Sc7JwFFb47qpyR1WCTV0OwUoTGi.jpg&w=1920&q=75",
  4: "https://www.samphi.re/cdn/shop/files/samphire-stripes-quick-dry-beach-towel-atlantis-navy-9.jpg?v=1743525930&width=1445",
  5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9M3jSMC9PwFU-pD3OVhaa6MrghU5lmqgqQ&s",
  6: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/61vVh6C3rvL.jpg"
};

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-8 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Complete Summer Catalog</h1>
          <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
            Explore all our seasonal essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div 
              key={product.id} 
              className="card bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
                <img 
                  src={imageAssetMap[product.id] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black text-slate-800 shadow-sm">
                  ⭐ {product.rating}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex-grow space-y-1">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {product.brand}
                  </span>
                  <h3 className="font-black text-slate-800 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <span className="text-2xl font-black text-slate-800">${product.price}</span>
                  <Link 
                    href={`/products/${product.id}`} 
                    className="btn btn-sm bg-slate-900 border-none text-white rounded-xl px-4 font-bold hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}