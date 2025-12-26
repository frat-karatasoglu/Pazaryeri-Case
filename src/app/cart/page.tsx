"use client";

import { useStore } from '@/store/useStore';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartPage() {
    const { cart } = useStore();

    // Toplam Tutar Hesaplama
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Para birimi formatlayıcı
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(price);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Sepetin şu an boş</h2>
                <p className="text-gray-500 mb-8">Hemen alışverişe başla, süper fırsatları kaçırma!</p>
                <Link
                    href="/"
                    className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200"
                >
                    Alışverişe Başla
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto pb-20 pt-4">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Sepetim <span className="text-sm font-normal text-gray-500">({cart.length} Ürün)</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* SOL TARA - Ürün Listesi */}
                <div className="flex-1 space-y-4">
                    {cart.map((product, index) => (
                        <div key={`${product.id}-${index}`} className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs text-gray-400 uppercase font-medium">{product.category}</span>
                                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-red-600">{formatPrice(product.price)}</span>
                                    {/* Silme butonu (Şimdilik sadece görsel, fonksiyon eklemedik) */}
                                    <button className="text-gray-400 hover:text-red-500 transition">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SAĞ TARAF - Sipariş Özeti */}
                <div className="lg:w-80 h-fit bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                    <h3 className="font-bold text-lg mb-4">Sipariş Özeti</h3>

                    <div className="space-y-3 text-sm mb-6">
                        <div className="flex justify-between text-gray-600">
                            <span>Ürün Toplamı</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Kargo Toplamı</span>
                            <span className="text-green-600 font-medium">Bedava</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-900">
                            <span>Toplam</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>
                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition active:scale-95">
                        Sepeti Onayla
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </div>
    );
}