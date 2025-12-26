#  Meşhur Pazaryeri - Frontend Case Study

Bu proje, **Next.js 16 (App Router)** ve modern frontend teknolojileri kullanılarak geliştirilmiş, ölçeklenebilir ve performans odaklı bir pazaryeri uygulamasıdır.

##  Teknolojiler ve Mimari Kararlar

Proje geliştirilirken **Atomic Design** prensiplerine sadık kalınmış ve **Separation of Concerns** (İlgi alanlarının ayrımı) ilkesi gözetilmiştir.

* **Framework:** Next.js 16 (App Router & Server Components)
* **Dil:** TypeScript (Strict Mode)
* **Stil:** Tailwind CSS v4 (Hızlı ve tutarlı UI geliştirme)
* **State Management:** Zustand (Sepet ve Favori yönetimi için hafif çözüm)
* **İkon Seti:** Lucide React
* **SEO:** Next.js Metadata API ile dinamik sayfa başlıkları ve açıklamaları.

##  Proje Yapısı (Atomic Design)

```bash
src/
 components/
    atoms/       # Temel yapı taşları (Button, Input vb.)
    molecules/   # İşlevsel gruplar (ProductCard, SearchBar)
    organisms/   # Karmaşık yapılar (Header, Footer)
    templates/   # Sayfa şablonları
 app/             # Sayfa yönlendirmeleri (Routing)
 store/           # Global State (Zustand)
 lib/             # Mock Data ve Yardımcı fonksiyonlar
 types/           # TypeScript arayüzleri
```

##  Öne Çıkan Özellikler

* **Server Side Rendering (SSR):** Ürün detay sayfaları ve listelemeler SEO uyumluluğu için sunucu tarafında render edilir.
* **Global State:** Sepete ekleme ve favori işlemleri Zustand ile tüm uygulama genelinde anlık senkronize edilir.
* **Responsive Tasarım:** Mobil ve masaüstü uyumlu (Mobile-First yaklaşımı).
* **Dinamik Routing:** `/product/[id]` yapısı ile her ürün için özel detay sayfası oluşturulur.

##  Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.
