export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    isNew?: boolean; // "Yeni" etiketi için
    discount?: number; // İndirim oranı
}