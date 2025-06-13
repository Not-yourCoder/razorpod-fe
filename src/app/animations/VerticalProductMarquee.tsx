import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

type DualColumnMarqueeProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    speed?: number;
    itemsPerColumn?: number;
};

function DualColumnMarquee<T>({
    items,
    renderItem,
    speed = 12,
    itemsPerColumn = 8, // How many unique items per column before repeating
}: DualColumnMarqueeProps<T>) {
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);

    // Split items into two non-overlapping sets
    const midpoint = Math.ceil(items.length / 2);
    const leftItems = items.slice(0, midpoint);
    const rightItems = items.slice(midpoint);

    // Create repeated arrays for seamless infinite scroll
    const createRepeatedItems = (columnItems: T[], count: number) => {
        const repeated = [];
        for (let i = 0; i < count; i++) {
            repeated.push(...columnItems);
        }
        return repeated;
    };

    // Create enough repetitions for smooth scrolling
    const repetitions = Math.max(3, Math.ceil(itemsPerColumn / Math.min(leftItems.length, rightItems.length)) + 1);
    const leftRepeatedItems = createRepeatedItems(leftItems, repetitions);
    const rightRepeatedItems = createRepeatedItems(rightItems, repetitions);
    // console.log("leftRepeatedItems", leftRepeatedItems)
    // console.log("rightRepeatedItems", rightRepeatedItems)

    useEffect(() => {
        if (!leftColumnRef.current || !rightColumnRef.current) return;

        const leftContainer = leftColumnRef.current;
        const rightContainer = rightColumnRef.current;

        // Get the height of one complete set of items
        const leftItemHeight = leftContainer.scrollHeight / repetitions;
        const rightItemHeight = rightContainer.scrollHeight / repetitions;

        // Set initial positions
        gsap.set(leftContainer, { y: 0 });
        gsap.set(rightContainer, { y: 0 });

        // Create infinite animations
        const leftTl = gsap.timeline({ repeat: -1 });
        const rightTl = gsap.timeline({ repeat: -1 });

        // Left column - moving down
        leftTl.to(leftContainer, {
            y: -leftItemHeight,
            duration: speed,
            ease: "none",
        });

        // Right column - moving up (reverse direction)
        rightTl.to(rightContainer, {
            y: rightItemHeight,
            duration: speed,
            ease: "none",
        });

        return () => {
            leftTl.kill();
            rightTl.kill();
        };
    }, [items, speed, repetitions]);

    return (
        <div className="flex gap-4 max-h-screen overflow-hidden">
            {/* Left Column */}
            <div className="flex-1 relative overflow-hidden">
                <div ref={leftColumnRef} className="flex flex-col">
                    {leftRepeatedItems.map((item, index) => (
                        <div key={`left-${index}`} className="flex-shrink-0">
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 relative overflow-hidden">
                <div ref={rightColumnRef} className="flex flex-col">
                    {rightRepeatedItems.map((item, index) => (
                        <div key={`right-${index}`} className="flex-shrink-0">
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DualColumnMarquee;