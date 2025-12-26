import ProductCard from "@/components/molecules/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="space-y-8">

      {/* Basit Hero Banner (Kırmızı Alan) */}
      <section className="bg-[#D32F2F] rounded-2xl p-6 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
        <div className="z-10 max-w-lg">
          <span className="bg-yellow-400 text-red-900 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">HAFTANIN FIRSATI</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Moda Keşifleri <br /> Outlet Fiyatına</h1>
          <p className="opacity-90 mb-6 text-sm">Dünyaca ünlü markalarda %50'ye varan indirimleri kaçırma.</p>
          <button className="bg-white text-red-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition">Hemen Keşfet</button>
        </div>
        {/* Dekoratif daire */}
        <div className="absolute -right-20 -bottom-40 w-80 h-80 bg-red-500 rounded-full opacity-50 blur-3xl"></div>
      </section>

      {/* Ürün Listesi Başlık */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            🔥 En Çok Satanlar
          </h2>
          <a href="#" className="text-sm text-red-600 font-medium hover:underline">Tümünü Gör</a>
        </div>

        {/* GRID YAPISI */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}