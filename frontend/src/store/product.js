import {create} from 'zustand'

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill all fields." };
        }

        try {
            const res = await fetch("http://localhost:3000/api/v1/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product Created successfully." };
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Failed to create product." };
        }
    }
}));
