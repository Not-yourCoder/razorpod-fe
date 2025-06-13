import React, { useState, useEffect } from 'react';

interface GlobalScrollbarProps {
    thumbColor?: string;
    trackColor?: string;
    thumbWidth?: string;
    position?: 'right' | 'left';
    offset?: string;
}

export const Scrollbar: React.FC<GlobalScrollbarProps> = ({
    thumbColor = 'red',
    trackColor = 'black',
    position = 'left',
    offset = '40px'
}) => {
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [showScrollbar, setShowScrollbar] = useState<boolean>(false);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

            setScrollProgress(progress);
            setShowScrollbar(scrollHeight > 0);
            setIsScrolling(true);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        };

        const handleResize = () => {
            handleScroll(); // Recalculate on resize
        };

        // Initial calculation
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const trackHeight = rect.height;
        const clickProgress = (clickY / trackHeight) * 100;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollTop = (clickProgress / 100) * scrollHeight;

        window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
        });
    };

    if (!showScrollbar) return null;

    const positionStyles = position === 'right'
        ? { right: offset }
        : { left: offset };

    return (
        <div
            className={`fixed top-10 z-50 h-64 transition-opacity duration-300 cursor-pointer ${isScrolling ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                }`}
            style={{
                width: "2px",
                backgroundColor: trackColor,
                ...positionStyles
            }}
            onClick={handleTrackClick}
        >
            <div
                className="absolute transition-all duration-150"
                style={{
                    width: "8px",
                    height: '60px',
                    backgroundColor: thumbColor,
                    top: `${scrollProgress}%`,
                    transform: 'translateY(-50%)',
                    borderRadius: 0
                }}
            />
        </div>
    );
};