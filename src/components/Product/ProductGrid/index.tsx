// import { useSelector, useDispatch } from 'react-redux';
// import type { AppDispatch, RootState } from '../../../store/store';
// import { fetchProducts, selectProduct } from '../../../store/slices/productSlice';
// import type { Product } from '../../../store/types';
// import { useEffect } from 'react';
// import { useNavigate } from '@tanstack/react-router';
// import { NewProductCard } from '../ProductCard/NewProductCard';


// const ProductGrid = () => {

//     const navigate = useNavigate();
//     const products = useSelector((state: RootState) => state.products.products);
//     const dispatch = useDispatch<AppDispatch>();

//     useEffect(() => {
//         dispatch(fetchProducts());
//     }, [dispatch]);

//     const handleProductClick = (product: Product) => {
//         dispatch(selectProduct(product));
//         navigate({ to: `/products/${product.id}` });
//     };
//     return (
//         <div className="flex gap-4 overflow-x-auto py-4 h-[90vh] no-scrollbar snap-x snap-mandatory">
//             {products.map((product) => (
//                 <NewProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} addTocart={() => console.log("Ite added to cart")} />
//             ))}
//         </div>
//     );
// };

// export default ProductGrid;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';
import { clearSelectedProduct, fetchProducts, selectProduct } from '../../../store/slices/productSlice';
import type { Product } from '../../../store/types';
import { useEffect } from 'react';
import { NewProductCard } from '../ProductCard/NewProductCard';
import { ProductDetailPage } from '@/pages/NewProductDetails';
import { addToCart } from '@/store/slices/cartSlice';

const ProductGrid = () => {
    
    const products = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch<AppDispatch>();
    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleProductClick = (product: Product) => {
        dispatch(selectProduct(product));
    };
    
    const handleBackToGrid = () => {
        dispatch(clearSelectedProduct());
    };

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
      };

    // Show product detail page if a product is selected
    if (selectedProduct) {
        return (
            <ProductDetailPage
                product={selectedProduct}
                onBack={handleBackToGrid}
            />
        );
    }

    // Show product grid
    return (
        <div className="py-8 overflow-hidden mt-36">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold text-gray-900 mb-8">Our Products</h1>
                <div className="flex min-h-[75vh] overflow-hidden gap-6 overflow-x-auto pb-4 bg-white no-scrollbar snap-x snap-mandatory">
                    {products.map((product) => (
                        <div key={product.id} className="snap-start">
                            <NewProductCard
                                product={product}
                                onClick={() => handleProductClick(product)}
                                addTocart={() => handleAddToCart(product)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default ProductGrid;