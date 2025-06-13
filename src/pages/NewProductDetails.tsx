import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Settings, Wrench, Zap, Circle } from 'lucide-react';
import type { Product } from '@/store/types';

type Props = {
    product: Product;
    onBack: () => void;
}

export const ProductDetailPage = ({ product, onBack }: Props) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [selectedWheel, setSelectedWheel] = useState(0);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);

    const wheelOptions = [
        { id: 0, name: 'Classic', icon: Circle },
        { id: 1, name: 'Sport', icon: Circle },
        { id: 2, name: 'Aero', icon: Circle },
        { id: 3, name: 'Racing', icon: Circle }
    ];

    const configOptions = [
        { id: 'settings', icon: Settings, active: true },
        { id: 'wrench', icon: Wrench, active: false },
        { id: 'zap', icon: Zap, active: false },
        { id: 'circle', icon: Circle, active: false }
    ];

    useEffect(() => {
        // Load GSAP from CDN
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
            const { gsap } = window as any;

            // Initial setup
            gsap.set(leftPanelRef.current, {
                x: -100,
                opacity: 0
            });

            gsap.set(rightPanelRef.current, {
                x: 100,
                opacity: 0
            });

            // Animate in
            const tl = gsap.timeline({
                onComplete: () => setIsAnimating(false)
            });

            tl.to(leftPanelRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            })
                .to(rightPanelRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.4");
        };

        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const handleBack = () => {
        const { gsap } = window as any;

        if (gsap) {
            gsap.to(leftPanelRef.current, {
                x: -100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in"
            });

            gsap.to(rightPanelRef.current, {
                x: 100,
                opacity: 0,
                duration: 0.6,
                ease: "power2.in",
                onComplete: onBack
            });
        } else {
            onBack();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Panel - Product Display */}
            <div
                ref={leftPanelRef}
                className="flex-1 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative overflow-hidden"
            >
                {/* Navigation */}
                <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center space-x-4">
                        <div className="text-white text-lg font-semibold">Bikeville</div>
                        <div className="w-px h-6 bg-white/30"></div>
                        <div className="text-white/70 text-sm">Overview</div>
                        <div className="text-white/50 text-sm">Specs</div>
                    </div>
                </div>

                {/* Product Name */}
                <div className="absolute top-24 left-6 z-20">
                    <h1 className="text-white text-4xl font-bold">{product.title}</h1>
                </div>

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-slate-500/10 font-bold text-9xl select-none">
                        {product.title.substring(0, 2).toUpperCase()}
                    </span>
                </div>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        {product.thumbnail ? (
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-96 h-auto object-contain"
                            />
                        ) : (
                            <svg
                                width="400"
                                height="240"
                                viewBox="0 0 200 120"
                                className="text-white"
                            >
                                {/* Bicycle SVG - same as card but larger */}
                                <g stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M60 80 L100 40 L140 80" />
                                    <path d="M100 40 L120 40" />
                                    <path d="M100 40 L100 65" />
                                    <path d="M85 80 L115 80" />
                                    <path d="M120 40 L125 35" />
                                    <path d="M115 35 L135 35" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M85 75 L95 75" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M90 75 L100 40" />
                                    <circle cx="100" cy="65" r="3" fill="currentColor" />
                                    <path d="M95 65 L105 65" strokeWidth="2" />
                                </g>
                                <g stroke="currentColor" strokeWidth="2" fill="none">
                                    <circle cx="140" cy="80" r="20" strokeWidth="3" />
                                    <circle cx="140" cy="80" r="3" fill="currentColor" />
                                    <path d="M125 65 L155 95" />
                                    <path d="M155 65 L125 95" />
                                    <path d="M140 60 L140 100" />
                                    <path d="M120 80 L160 80" />
                                    <circle cx="60" cy="80" r="20" strokeWidth="3" />
                                    <circle cx="60" cy="80" r="3" fill="currentColor" />
                                    <path d="M45 65 L75 95" />
                                    <path d="M75 65 L45 95" />
                                    <path d="M60 60 L60 100" />
                                    <path d="M40 80 L80 80" />
                                </g>
                                <path
                                    d="M80 80 Q90 75 100 65 Q110 75 120 80"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                    strokeDasharray="2,2"
                                />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <span className="text-white text-3xl font-bold">
                        ${product.price.toLocaleString()}
                    </span>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Right Panel - Configuration */}
            <div
                ref={rightPanelRef}
                className="w-96 bg-white p-6 overflow-y-auto"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={handleBack}
                        className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                </div>

                {/* Configuration Title */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Configure the Bike</h2>

                    {/* Config Options */}
                    <div className="flex space-x-2 mb-6">
                        {configOptions.map((option) => {
                            const IconComponent = option.icon;
                            return (
                                <button
                                    key={option.id}
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${option.active
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Wheels Section */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Wheels</h3>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                        {wheelOptions.map((wheel) => {
                            const IconComponent = wheel.icon;
                            return (
                                <button
                                    key={wheel.id}
                                    onClick={() => setSelectedWheel(wheel.id)}
                                    className={`aspect-square rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${selectedWheel === wheel.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <IconComponent
                                        className={`w-8 h-8 ${selectedWheel === wheel.id ? 'text-blue-500' : 'text-gray-400'
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Wheel Selection Indicator */}
                    <div className="flex justify-center space-x-1">
                        {wheelOptions.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === selectedWheel ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};