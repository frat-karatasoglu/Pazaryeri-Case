"use client"; // Hook ve tıklama olayları için zorunlu

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useStore } from '@/store/useStore'; // Store importu
import clsx from 'clsx'; // Class birleştirme (Stil yönetimi için)

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Store'dan fonksiyonları ve veriyi çekiyoruz
    const { addToCart, toggleFavorite, favorites } = useStore();

    // Bu ürün şu an favorilerde mi? (Kalbin içi dolu mu boş mu olacak?)
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    // Fiyat formatlama (TL)
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(price);
    };

    return (
        <div className="group bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 overflow-hidden relative">

            {/* İndirim veya Yeni Badge'leri */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isNew && (
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">YENİ</span>
                )}
                {product.discount && (
                    <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded">%{product.discount}</span>
                )}
            </div>

            {/* Favori Butonu (Etkileşimli) */}
            <button
                onClick={() => toggleFavorite(product)}
                className={clsx(
                    "absolute top-3 right-3 z-10 p-1.5 rounded-full transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
                    isFavorite
                        ? "bg-red-50 text-red-600 opacity-100 scale-110" // Favoriyse kırmızı ve görünür kal
                        : "bg-white/80 hover:bg-red-50 hover:text-red-600 opacity-0 group-hover:opacity-100" // Değilse gizli, hoverda çık
                )}
            >
                <Heart size={18} className={isFavorite ? "fill-current" : ""} />
            </button>

            {/* Link Sadece Resim ve Başlığı Kapsasın */}
            <Link href={`/product/${product.id}`} className="block">

                {/* Ürün Görseli */}
                <div className="relative aspect-square w-full bg-gray-50">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Ürün Bilgileri */}
                <div className="p-4 pb-0">
                    <span className="text-xs text-gray-400 font-medium uppercase">{product.category}</span>
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1 min-h-[40px] group-hover:text-red-600 transition-colors">
                        {product.name}
                    </h3>
                </div>
            </Link>

            {/* Fiyat ve Sepet Butonu (Link'in dışında kalsın ki butona basınca sayfaya gitmesin) */}
            <div className="p-4 pt-2 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    {/* İndirimli Fiyat Gösterimi */}
                    {product.discount ? (
                        <>
                            <span className="text-xs text-gray-400 line-through">
                                {formatPrice(product.price * 1.2)}
                            </span>
                            <span className="text-lg font-bold text-red-600">
                                {formatPrice(product.price)}
                            </span>
                        </>
                    ) : (
                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(product.price)}
                        </span>
                    )}
                </div>

                {/* Sepete Ekle Butonu (Etkileşimli) */}
                <button
                    onClick={() => addToCart(product)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors shadow-md active:scale-95 active:bg-red-800"
                >
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    );
}