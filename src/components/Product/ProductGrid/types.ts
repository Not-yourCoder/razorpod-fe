import type { Product } from "../../../store/types";

export interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}
