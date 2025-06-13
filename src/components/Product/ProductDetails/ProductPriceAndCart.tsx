import type { Product } from '@/store/types';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductPriceAndCart = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart.`);
    };

    return (
        <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-6">
            <div className="text-white text-3xl font-bold">${product.price}</div>
            <button
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-2xl hover:scale-105 duration-300 hover:cursor-pointer"
                onClick={() => handleAddToCart(product)}
            >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default ProductPriceAndCart;
