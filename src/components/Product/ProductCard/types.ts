import type { Product } from "../../../store/types";

export interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}
