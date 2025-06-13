import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';
import type { Product } from '@/store/types';
import ProductHeader from './ProductHeader';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductPriceAndCart from './ProductPriceAndCart';
import ProductInfo from './ProductInfo';
import ReviewsList from './ReviewsList';
import ConfigOptions from '../ConfigOptions';
import { addToCart } from '@/store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

type Props = {
    product: Product;
    onBack: () => void;
};

export const ProductDetailPage = ({ product, onBack }: Props) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(leftPanelRef.current, { x: -100, opacity: 0 });
        gsap.set(rightPanelRef.current, { x: 100, opacity: 0 });

        const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });
        tl.to(leftPanelRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
            .to(rightPanelRef.current, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4");
    }, []);

    const handleBack = () => {
        gsap.to(leftPanelRef.current, {
            x: -100, opacity: 0, duration: 0.6, ease: "power2.in"
        });
        gsap.to(rightPanelRef.current, {
            x: 100, opacity: 0, duration: 0.6, ease: "power2.in", onComplete: onBack
        });
    };


    return (
        <div className="min-h-screen bg-gray-50 flex ">
            {/* Left Panel */}
            <div ref={leftPanelRef} className="flex-1 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative overflow-hidden">
                <ProductHeader />
                <ProductTitle product={product} />
                <ProductImage product={product} />
                <ProductPriceAndCart product={product} />
            </div>

            {/* Right Panel */}
            <div ref={rightPanelRef} className="w-96 max-h-screen bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={handleBack} className="flex items-center text-gray-600 hover:text-gray-800">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back
                    </button>
                </div>

                <ProductInfo product={product} />
                <div>
                    <h1 className='text-lg font-semibold'>Reviews</h1>
                    {product.reviews.map((review) => (
                        <ReviewsList review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
};
