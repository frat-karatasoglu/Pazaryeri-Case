import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/lib/mockData';
import ProductActions from '@/components/molecules/ProductActions';
import { ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

// Tip tanımı (Next.js 16/15 Params yapısı)
type Props = {
    params: Promise<{ id: string }>;
};

// 1. SEO METADATA (Dinamik Başlık)
export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const product = MOCK_PRODUCTS.find((p) => p.id === Number(resolvedParams.id));

    if (!product) {
        return { title: 'Ürün Bulunamadı' };
    }

    return {
        title: `${product.name} | Meşhur Pazaryeri`,
        description: `${product.category} kategorisindeki ${product.name} ürününü hemen incele.`,
    };
}

// 2. SAYFA BİLEŞENİ (Server Component)
export default async function ProductDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const product = MOCK_PRODUCTS.find((p) => p.id === Number(resolvedParams.id));

    // Ürün yoksa 404 sayfasına at
    if (!product) {
        notFound();
    }

    // Fiyat formatlayıcı
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price);
    };

    return (
        <div className="max-w-6xl mx-auto pb-20">
            {/* Geri Dön Linki */}
            <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-6 transition-colors">
                <ArrowLeft size={18} />
                <span>Ana Sayfaya Dön</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">

                {/* SOL TARA - GÖRSEL */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                    {product.discount && (
                        <span className="absolute top-4 left-4 z-10 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md shadow-sm">
                            %{product.discount} İndirim
                        </span>
                    )}
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* SAĞ TARAF - BİLGİLER */}
                <div className="flex flex-col">
                    <span className="text-sm text-red-600 font-bold uppercase tracking-wider mb-2">{product.category}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

                    {/* Değerlendirme Yıldızları (Fake) */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                        </div>
                        <span className="text-gray-400 text-sm">(128 Değerlendirme)</span>
                    </div>

                    {/* Fiyat Alanı */}
                    <div className="mb-8">
                        {product.discount ? (
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-red-600">{formatPrice(product.price)}</span>
                                <span className="text-xl text-gray-400 line-through mb-1">{formatPrice(product.price * 1.2)}</span>
                            </div>
                        ) : (
                            <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                        )}
                        <p className="text-sm text-green-600 mt-2 font-medium">Kargo Bedava</p>
                    </div>

                    {/* Avantaj Kutuları */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="border border-gray-100 p-3 rounded-lg flex items-center gap-3">
                            <Truck className="text-gray-400" />
                            <div className="text-xs">
                                <p className="font-bold text-gray-900">Hızlı Teslimat</p>
                                <p className="text-gray-500">24 saatte kargoda</p>
                            </div>
                        </div>
                        <div className="border border-gray-100 p-3 rounded-lg flex items-center gap-3">
                            <ShieldCheck className="text-gray-400" />
                            <div className="text-xs">
                                <p className="font-bold text-gray-900">Güvenli Ödeme</p>
                                <p className="text-gray-500">256-bit SSL koruması</p>
                            </div>
                        </div>
                    </div>

                    {/* Açıklama (Fake) */}
                    <p className="text-gray-600 leading-relaxed mb-auto">
                        Bu ürün {product.category} kategorisinin en gözde parçalarından biridir.
                        Üstün kalite standartlarında üretilmiş olup, uzun ömürlü kullanım vaat eder.
                        Kullanıcılarımızın %98'i bu ürünü tavsiye ediyor.
                    </p>

                    {/* Client Component Buttonlar */}
                    <ProductActions product={product} />

                </div>
            </div>
        </div>
    );
}