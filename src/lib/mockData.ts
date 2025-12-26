import { Product } from "@/types";

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Organik Yüz Temizleme Jeli",
        price: 379.05,
        category: "Kozmetik",
        imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400",
        isNew: true
    },
    {
        id: 2,
        name: "Doğal Saç Bakım Spreyi",
        price: 221.84,
        category: "Kozmetik",
        imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
        discount: 15
    },
    {
        id: 3,
        name: "Hassas Diş Macunu ",
        price: 718.00,
        category: "Sağlık",
        imageUrl: "https://images.unsplash.com/photo-1594178990090-ca641059a506?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Dr. Melaxin Leke Kremi",
        price: 1513.35,
        category: "Kozmetik",
        imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=400",
        isNew: true
    },
    {
        id: 5,
        name: "Spor Koşu Ayakkabısı",
        price: 2450.00,
        category: "Moda",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
        discount: 20
    }
];