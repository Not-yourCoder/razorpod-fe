import React from 'react';
import type { Product } from '../../store/types';

interface ProductCardProps {
  product: Product;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded p-2 cursor-pointer hover:shadow-lg"
    >
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
