import { useRef, useEffect } from "react";
import gsap from "gsap";

type ProductDotProps = {
    top: string;
    left: string;
    productId: string;
    onHover?: (top: string, left: string) => void;
};

const ProductDot = ({
    top,
    left,
    productId,
    onHover,
}: ProductDotProps) => {
    const dotRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (dotRef.current) {
            // Set initial animation state
            gsap.set(dotRef.current, { scale: 1 });
        }
    }, []);

    const handleClick = () => {
        const el = document.getElementById(productId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const handleMouseEnter = () => {
        // Animate dot scale up
        if (dotRef.current) {
            gsap.to(dotRef.current, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        }

        // Trigger parent zoom effect
        if (onHover) {
            onHover(top, left);
        }
    };

    const handleMouseLeave = () => {
        // Animate dot scale back to normal
        if (dotRef.current) {
            gsap.to(dotRef.current, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    };

    return (
        <div
            className="absolute z-10"
            style={{ top, left, transform: 'translate(-50%, -50%)' }}
        >
            <button
                ref={dotRef}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-3 h-3 bg-pink-600 rounded-full border-2 border-white shadow-lg cursor-pointer relative"
            >
                {/* Pulse animation ring */}
                <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-75 -z-10"></div>
            </button>
        </div>
    );
};

export default ProductDot;