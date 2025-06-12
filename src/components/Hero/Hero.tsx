// HeroImage.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { images } from "../../constants/Images";
import ProductDot from "./ProductDot";

const HeroImage = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial state
        if (imageRef.current) {
            gsap.set(imageRef.current, {
                scale: 1,
                transformOrigin: "center center",
                x: 0,
                y: 0
            });
        }
    }, []);

    const handleDotHover = (top: string, left: string) => {
        if (!imageRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const image = imageRef.current;

        // Get container dimensions
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;

        // Convert percentage strings to numbers
        const dotX = parseFloat(left.replace('%', ''));
        const dotY = parseFloat(top.replace('%', ''));

        // Calculate the actual pixel position of the dot
        const dotPixelX = (dotX / 100) * containerWidth;
        const dotPixelY = (dotY / 100) * containerHeight;

        // Calculate where to move the image so the dot is centered
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;

        // Calculate translation needed (with zoom factor)
        const zoomLevel = 2.5;
        const translateX = (centerX - dotPixelX) * zoomLevel;
        const translateY = (centerY - dotPixelY) * zoomLevel;

        // Animate zoom and pan
        gsap.to(image, {
            scale: zoomLevel,
            x: translateX,
            y: translateY,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "0 0"
        });
    };

    const handleMouseLeave = () => {
        if (!imageRef.current) return;

        // Reset to original state
        gsap.to(imageRef.current, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "center center"
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-172 h-full mx-auto my-0 overflow-hidden"
            onMouseLeave={handleMouseLeave}
        >
            <img
                ref={imageRef}
                src={images.modelImg}
                alt="Kylie Jenner"
                className="w-full h-full object-cover"
                draggable={false}
            />

            <ProductDot
                top="13%"
                left="49%"
                productId="product-1"
                onHover={handleDotHover}
            />
            <ProductDot
                top="15%"
                left="40%"
                productId="product-2"
                onHover={handleDotHover}
            />
            <ProductDot
                top="16.5%"
                left="45%"
                productId="mascara-product"
                onHover={handleDotHover}
            />
            <ProductDot
                top="36.5%"
                left="35%"
                productId="mascara-product"
                onHover={handleDotHover}
            />
            <ProductDot
                top="65%"
                left="48%"
                productId="lipstick-product"
                onHover={handleDotHover}
            />
            <ProductDot
                top="63.4%"
                left="62%"
                productId="lipstick-product"
                onHover={handleDotHover}
            />
        </div>
    );
};

export default HeroImage;