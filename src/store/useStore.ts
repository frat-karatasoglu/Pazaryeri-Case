import { create } from 'zustand';
import { Product } from '@/types';

interface AppState {
    cart: Product[];
    favorites: Product[];
    addToCart: (product: Product) => void;
    toggleFavorite: (product: Product) => void;
}

export const useStore = create<AppState>((set) => ({
    cart: [],
    favorites: [],

    // Sepete Ekleme Fonksiyonu
    addToCart: (product) => set((state) => ({
        cart: [...state.cart, product]
    })),

    // Favori Ekle/Çıkar Fonksiyonu
    toggleFavorite: (product) => set((state) => {
        const isFavorite = state.favorites.find((p) => p.id === product.id);
        if (isFavorite) {
            // Varsa çıkar
            return { favorites: state.favorites.filter((p) => p.id !== product.id) };
        }
        // Yoksa ekle
        return { favorites: [...state.favorites, product] };
    }),
}));