import React, { useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import type { Product } from '@/store/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/Ui/tooltip';
import toast from 'react-hot-toast';

type Props = {
    product: Product,
    onClick: () => void
    addTocart: () => void
}

export const NewProductCard = ({
    product,
    onClick,
    addTocart
}: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Extract first two letters for background text
    const backgroundText = product.title.substring(0, 2).toUpperCase();

    useEffect(() => {
        // Load GSAP from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
            const { gsap } = window as any;

            // Set initial state
            gsap.set(cardRef.current, {
                opacity: 0,
                scale: 0.8,
                y: 20,
                rotationX: -15,
                transformOrigin: "center bottom"
            });

            const handleMouseEnter = () => {
                gsap.to(cardRef.current, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    transformOrigin: "center bottom"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(cardRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    rotationX: -15,
                    duration: 0.4,
                    ease: "power2.in",
                    transformOrigin: "center bottom"
                });
            };

            const container = containerRef.current;
            if (container) {
                container.addEventListener('mouseenter', handleMouseEnter);
                container.addEventListener('mouseleave', handleMouseLeave);

                // Cleanup function
                return () => {
                    container.removeEventListener('mouseenter', handleMouseEnter);
                    container.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        };

        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const handleAddToCart = (e: React.MouseEvent, item: Product) => {
        e.stopPropagation();
        addTocart();
        toast(`${item.title} added to cart.`)
    };

    return (
        <div
            ref={containerRef}
            className="w-86 h-96 relative cursor-pointer flex-shrink-0"
            style={{ perspective: '1000px' }}
        >
            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-contain"
                />

            </div>

            {/* Actual Card */}
            <div
                ref={cardRef}
                className="absolute inset-0 w-86 h-[75vh] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-t-lg p-6 overflow-hidden shadow-2xl hover:cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={onClick}
            >
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-slate-500/20 font-bold text-[16rem] select-none">
                        {backgroundText}
                    </span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-86 flex flex-col">
                    {/* Product Name */}
                    <h3 className="text-white font-semibold text-lg mb-6">
                        {product.title}
                    </h3>

                    {/* Product Image */}
                    <div className="flex-1 flex items-center justify-center mb-6">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-xl">
                            ${product.price.toLocaleString()}
                        </span>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={(e) => handleAddToCart(e, product)}
                                    className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-200 shadow-lg hover:cursor-pointer"
                                >
                                    <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Add to Cart</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};