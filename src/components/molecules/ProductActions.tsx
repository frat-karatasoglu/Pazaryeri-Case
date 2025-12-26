"use client";

import { ShoppingCart, Heart } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Product } from '@/types';
import clsx from 'clsx';

export default function ProductActions({ product }: { product: Product }) {
    const { addToCart, toggleFavorite, favorites } = useStore();

    const isFavorite = favorites.some((fav) => fav.id === product.id);

    return (
        <div className="flex gap-4 mt-8">
            {/* Sepete Ekle Butonu */}
            <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-200"
            >
                <ShoppingCart size={20} />
                Sepete Ekle
            </button>

            {/* Favori Butonu */}
            <button
                onClick={() => toggleFavorite(product)}
                className={clsx(
                    "p-4 rounded-xl border-2 transition-all active:scale-95",
                    isFavorite
                        ? "border-red-200 bg-red-50 text-red-600"
                        : "border-gray-200 hover:border-red-200 hover:text-red-600 text-gray-400"
                )}
            >
                <Heart size={24} className={isFavorite ? "fill-current" : ""} />
            </button>
        </div>
    );
}