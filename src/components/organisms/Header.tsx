"use client"; // Hook kullandığımız için bu satır ZORUNLU

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useStore } from '@/store/useStore'; // Store import edildi

export default function Header() {
    // Store'dan verileri çekiyoruz
    const { cart, favorites } = useStore();

    return (
        <header className="flex flex-col w-full font-sans">
            {/* 1. Üst Bilgi Çubuğu (Siyah Alan) */}
            <div className="bg-[#121212] text-white text-[11px] py-1.5 px-4 border-b border-gray-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1">🚚 Ücretsiz Kargo</span>
                        <span className="flex items-center gap-1">🛡️ Güvenli Alışveriş</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Uygulamayı İndir</Link>
                        <div className="w-px h-3 bg-gray-600 my-auto"></div>
                        <Link href="#" className="flex items-center gap-1 text-white font-semibold hover:text-red-400 transition-colors">
                            Satış Yap <span className="bg-red-600 text-[9px] px-1.5 rounded-sm ml-1">YENİ</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. Ana Header (Kırmızı Alan) */}
            <div className="bg-[#D32F2F] text-white py-3 px-4 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex items-center gap-4 lg:gap-8">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col leading-none group">
                        <span className="text-2xl font-black tracking-tighter group-hover:scale-105 transition-transform">MEŞHUR</span>
                        <span className="text-[10px] opacity-90 font-medium tracking-widest">PAZARYERİ</span>
                    </Link>

                    {/* Kategoriler Butonu */}
                    <button className="hidden md:flex items-center gap-2 text-sm font-semibold bg-red-800/40 hover:bg-red-800/60 px-4 py-2.5 rounded-lg transition-all border border-red-400/30">
                        <Menu size={18} />
                        <span>Kategoriler</span>
                    </button>

                    {/* Arama Çubuğu */}
                    <div className="flex-1 relative group">
                        <input
                            type="text"
                            placeholder="Ürün, kategori veya marka ara..."
                            className="w-full py-3 pl-5 pr-12 rounded-full text-gray-800 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-red-400/50 transition-shadow shadow-sm"
                        />
                        <button className="absolute right-1.5 top-1.5 bg-[#121212] p-2 rounded-full text-white hover:bg-gray-800 transition-colors">
                            <Search size={18} />
                        </button>
                    </div>

                    {/* Sağ İkonlar (GÜNCELLENEN KISIM BURASI) */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        <button className="flex flex-col items-center text-xs gap-1 hover:bg-white/10 p-2 rounded-lg transition-colors">
                            <User size={22} />
                            <span className="hidden lg:block font-medium">Giriş Yap</span>
                        </button>

                        {/* Favoriler Butonu - Sayı Göstergeli */}
                        <button className="flex flex-col items-center text-xs gap-1 hover:bg-white/10 p-2 rounded-lg transition-colors relative">
                            <Heart
                                size={22}
                                className={favorites.length > 0 ? "text-red-400 fill-red-400" : ""}
                            />
                            <span className="hidden lg:block font-medium">Favorilerim</span>
                            {favorites.length > 0 && (
                                <span className="absolute top-1 right-1 bg-white text-red-600 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                                    {favorites.length}
                                </span>
                            )}
                        </button>

                        {/* Sepet Butonu - Sayı Göstergeli */}
                        <Link href="/cart" className="flex flex-col items-center text-xs gap-1 hover:bg-white/10 p-2 rounded-lg transition-colors relative">
                            <ShoppingCart size={22} />
                            <span className="hidden lg:block font-medium">Sepetim</span>
                            {cart.length > 0 && (
                                <span className="absolute top-1 right-1 bg-yellow-400 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}