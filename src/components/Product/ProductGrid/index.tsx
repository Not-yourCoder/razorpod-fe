import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store/store';
import { clearSelectedProduct, fetchProducts, selectProduct } from '../../../store/slices/productSlice';
import gsap from "gsap"
import type { Product } from '../../../store/types';
import { useEffect } from 'react';
import { NewProductCard } from '../ProductCard/NewProductCard';
import { addToCart } from '@/store/slices/cartSlice';
import { ProductDetailPage } from '../ProductDetails';
import { selectSortedProducts } from '../SortBy';
import { ProductGridSkeleton } from '@/components/Skeletons/Product/ProductGridSkeleton';
import { scrollByAmount } from '@/utils/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGrid = () => {
    const products = useSelector(selectSortedProducts);
    const dispatch = useDispatch<AppDispatch>();
    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);
    const loading = useSelector((state: RootState) => state.products.loading);
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0 && containerRef.current) {
            const ctx = gsap.context(() => {
                // Animate container and cards simultaneously for better performance
                gsap.fromTo(".product-grid-container",
                    { opacity: 0, scale: 0.98 },
                    { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
                );

                gsap.fromTo(".product-card",
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        stagger: 0.05,
                        ease: "power2.out"
                    }
                );
            }, containerRef);

            return () => ctx.revert();
        }
    }, [products]);

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

    if (loading || products.length === 0) {
        return <ProductGridSkeleton />;
    }


    // Show product grid
    return (
        <div className="py-4 sm:py-6 lg:py-8 overflow-y-hidden mt-20 sm:mt-24 md:mt-28 lg:mt-36 product-grid-container" ref={containerRef}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-7xl xl:max-w-[95rem]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
                    Our Products
                </h1>

                {/* Mobile: Vertical scroll grid */}
                <div className="block sm:hidden">
                    <div className="grid grid-cols-1 gap-4 min-h-[60vh] ">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <NewProductCard
                                    product={product}
                                    onClick={() => handleProductClick(product)}
                                    addTocart={() => handleAddToCart(product)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet: 2-column grid */}
                <div className="hidden sm:block md:hidden">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 min-h-[70vh]">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <NewProductCard
                                    product={product}
                                    onClick={() => handleProductClick(product)}
                                    addTocart={() => handleAddToCart(product)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Medium screens: 3-column grid */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-3 gap-4 lg:gap-6 min-h-[70vh]">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <NewProductCard
                                    product={product}
                                    onClick={() => handleProductClick(product)}
                                    addTocart={() => handleAddToCart(product)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Large screens and up: Horizontal scrolling */}
                <div className="hidden lg:block relative">
                    <button
                        onClick={() => scrollByAmount(horizontalScrollRef, -300)}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:shadow z-10 hover:bg-slate-200 hover:scale-120 hover:text-slate-600 hover:cursor-pointer duration-300"
                    >
                        <ChevronLeft size={36} />
                    </button>
                    <div className="flex flex-nowrap min-h-[75vh] gap-4 xl:gap-6 overflow-y-hidden overflow-x-auto pb-4 bg-white no-scrollbar snap-x snap-mandatory scroll-smooth" ref={horizontalScrollRef} >
                        {products.map((product) => (
                            <div key={product.id} className="snap-start product-card flex-shrink-0">
                                <NewProductCard
                                    product={product}
                                    onClick={() => handleProductClick(product)}
                                    addTocart={() => handleAddToCart(product)}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scrollByAmount(horizontalScrollRef, 300)}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full hover:shadow z-10 hover:bg-slate-200 hover:scale-120 hover:text-slate-600  hover:cursor-pointer duration-300"
                    >
                        <ChevronRight size={36} />
                    </button>
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style>{`
            .product-card {
  min-width: 500px;
}
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                
                /* Ensure proper touch scrolling on mobile */
                @media (max-width: 640px) {
                    .product-grid-container {
                        -webkit-overflow-scrolling: touch;
                    }
                }
                
                /* Responsive grid adjustments */
                @media (min-width: 1536px) {
                    .product-card {
                        min-width: 320px;
                    }
                }
                
                @media (min-width: 1280px) and (max-width: 1535px) {
                    .product-card {
                        min-width: 300px;
                    }
                }
                
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .product-card {
                        min-width: 280px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductGrid;