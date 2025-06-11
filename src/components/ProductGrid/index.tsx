import ProductCard from '../ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { fetchProducts, selectProduct } from '../../store/slices/productSlice';
import type { Product } from '../../store/types';
import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';


const ProductGrid = () => {

    const navigate = useNavigate();
    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleProductClick = (product: Product) => {
        dispatch(selectProduct(product));
        navigate({ to: `/products/${product.id}` });
      };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
