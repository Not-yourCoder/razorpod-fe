import type { RootState } from "@/store/store";
import type { Product } from "@/store/types";

export const selectSortedProducts = (state: RootState): Product[] => {
    const { products, sortBy } = state.products;

    if (!sortBy) return products;

    const sorted = [...products];

    switch (sortBy) {
        case "name-asc":
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "name-desc":
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case "price-asc":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            sorted.sort((a, b) => b.price - a.price);
            break;
    }

    return sorted;
};
