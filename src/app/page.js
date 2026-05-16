import Link from 'next/link';
import productsData from './data/products.json';
import LottieHero from '@/components/LottieHero'; 

export default async function HomePage() {
  const popularProducts = productsData.slice(0, 3);
  const uniqueBrands = [...new Set(productsData.map((p) => p.brand))].slice(0, 4);

  return (
    <div className="space-y-32 pb-20 overflow-hidden">
      
      <section className="relative min-h-[85vh] flex items-center px-4 md:px-12 bg-[#fafafa]">
        <div className="absolute top-1/4 right-10 -z-10 w-96 h-96 bg-summer-sun/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center w-full">
          
          <div className="lg:col-span-7 space-y-12 text-left order-2 lg:order-1 px-2">
            
            <div className="relative inline-flex items-center justify-center w-90 h-34 group select-none">
              <div className="absolute inset-0 w-full h-full opacity-90 scale-125 pointer-events-none">
                <LottieHero url="https://lottie.host/b63f60fb-8dec-423f-b3ef-8464df088475/hPhKn6ytcd.lottie" />
              </div>
              
              <span className="relative z-10 text-2xl font-black italic tracking-tighter text-slate-900 uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                HOT DEALS
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tighter leading-[1.1]">
                Summer Sale <br />
                <span className="relative inline-block text-summer-ocean">
                  50% OFF
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-summer-sun/30 -z-10 transform -rotate-1 rounded-sm" />
                </span>
              </h1>
              
              <div className="pt-2 max-w-xl">
                <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-summer-sun pl-5">
                  "Want to try some unique and comfortable product this summer!!! try out our product"
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/products">
                <button className="btn btn-lg bg-slate-900 hover:bg-summer-ocean text-white px-10 rounded-2xl border-none shadow-xl hover:shadow-summer-ocean/30 transition-all transform hover:-translate-y-1 font-bold">
                  Explore Collection
                </button>
              </Link>
              <Link href="/products" className="text-sm font-black uppercase tracking-widest text-slate-800 hover:text-summer-ocean transition-colors border-b-2 border-slate-800 hover:border-summer-ocean py-1">
                View Trends →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm aspect-[4/5] sm:aspect-square bg-slate-100 rounded-[3rem] shadow-xl overflow-hidden group border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1000" 
                 alt="Summer Premium Collection" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-4 left-4 md:-left-8 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-white/50 animate-bounce-slow max-w-[200px]">
              <span className="block text-[10px] font-black uppercase tracking-widest text-summer-ocean mb-1">Authentic Lifestyle</span>
              <p className="text-sm font-bold text-slate-800 leading-tight">Lightweight materials perfect for intense tropical days.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
            Popular Products
          </h2>
          <div className="w-24 h-1.5 bg-summer-sun mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {popularProducts.map((product) => {
            const imageAssetMap = {
              1: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
              2: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
              3: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600"
            };

            const finalProductImage = imageAssetMap[product.id] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600";

            return (
              <div 
                key={product.id} 
                className="group bg-white rounded-[2.5rem] border border-slate-100 p-5 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-100 block">
                  <img 
                    src={finalProductImage} 
                    alt={product.name}
                    className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-1000"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm z-10">
                    <span className="text-sm font-bold text-slate-800">⭐ {product.rating}</span>
                  </div>
                </div>
                
                <div className="mt-8 px-2 space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-bold text-slate-800 leading-tight group-hover:text-summer-ocean transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-black text-summer-ocean flex-shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    {product.brand}
                  </p>
                  
                  <Link href={`/products/${product.id}`} className="block pt-4">
                    <button className="btn btn-block bg-slate-900 hover:bg-summer-ocean text-white border-none rounded-2xl h-14 font-bold text-lg transition-all shadow-lg hover:shadow-summer-ocean/40">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6">
        <div className="bg-mist-100 rounded-[3.5rem] overflow-hidden p-8 md:p-20 relative border border-slate-100 shadow-2xl">
          
          <div className="absolute inset-0 opacity-15 pointer-events-none scale-150 mix-blend-screen">
            <LottieHero url="https://lottie.host/61cdbda4-b396-4d5c-892a-09a8a3ccd239/6pMATkbtUE.lottie" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-9">
              <div className="space-y-3">
                <span className="text-l mb-1 font-black uppercase tracking-[0.3em] text-summer-sun block">
                  Wellness Guide
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  Summer Care <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-summer-sun from-orange-200 to-orange-800">
                    Tips & Essentials
                  </span>
                </h2>
              </div>
              
              <div className="space-y-4 max-w-xl">
                <div className="collapse collapse-plus bg-mist-200 backdrop-blur-md border border-white/10 rounded-2xl transition-all hover:border-white/20">
                  <input type="radio" name="care-guide" defaultChecked /> 
                  <div className="collapse-title text-lg font-bold text-summer-sun tracking-wide">
                    Intense Sun Protection
                  </div>
                  <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                    <p>
                      Try to apply sunscreen of SPF-50 every two hours. Pair it with our certified UV protection sunglasses to shield your eyes from reflective beach glare.
                    </p>
                  </div>
                </div>
                
                <div className="collapse collapse-plus bg-mist-200 backdrop-blur-md border border-white/10 rounded-2xl transition-all hover:border-white/20">
                  <input type="radio" name="care-guide" /> 
                  <div className="collapse-title text-lg font-bold text-summer-sun tracking-wide">
                    Deep Cellular Hydration
                  </div>
                  <div className="collapse-content text-slate-600 text-sm leading-relaxed">
                    <p>
                      As physical temperatures rise, prioritize clean hydration. Drink infused water or electrolyte-rich coconut water consistently throughout the day to keep your skin plump and glowing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block relative justify-self-end">
              <div className="absolute -inset-6 bg-summer-sun/10 blur-3xl rounded-full pointer-events-none" />
              <div className="w-72 aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-slate-300 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" 
                  alt="Summer Skincare Self-Care Routine" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 block">
            Curated Partnerships
          </span>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
            Top Seasonal Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {uniqueBrands.map((brand, index) => {
            const rotations = ["hover:rotate-1", "hover:-rotate-1", "hover:rotate-2", "hover:-rotate-2"];
            const currentRotation = rotations[index % rotations.length];

            return (
              <div 
                key={brand} 
                className={`bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[140px] shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500 cursor-default group transform ${currentRotation}`}
              >
                <span className="text-xl md:text-2xl font-black text-slate-400 group-hover:text-summer-ocean transition-colors duration-300 tracking-tighter italic uppercase">
                  {brand}
                </span>
                <div className="w-0 h-0.5 bg-summer-ocean group-hover:w-12 transition-all duration-300 mt-2 rounded-full" />
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}