export const ProductGridSkeleton = () => {
    return (
        <div className="py-4 sm:py-6 lg:py-8 overflow-hidden mt-20 sm:mt-24 md:mt-28 lg:mt-36 animate-pulse">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-7xl xl:max-w-[90rem]">
                {/* Title skeleton */}
                <div className="h-8 sm:h-10 md:h-12 lg:h-14 bg-slate-300 rounded-lg mb-4 sm:mb-6 lg:mb-8 w-64 mx-auto sm:mx-0"></div>

                {/* Mobile skeleton */}
                <div className="block sm:hidden">
                    <div className="grid grid-cols-1 gap-4 min-h-[60vh]">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-slate-300 rounded-lg h-96"></div>
                        ))}
                    </div>
                </div>

                {/* Tablet skeleton */}
                <div className="hidden sm:block md:hidden">
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 min-h-[70vh]">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-slate-300 rounded-lg h-80"></div>
                        ))}
                    </div>
                </div>

                {/* Medium screens skeleton */}
                <div className="hidden md:block lg:hidden">
                    <div className="grid grid-cols-3 gap-4 lg:gap-6 min-h-[70vh]">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-slate-300 rounded-lg h-80"></div>
                        ))}
                    </div>
                </div>

                {/* Large screens skeleton */}
                <div className="hidden lg:block">
                    <div className="flex min-h-[75vh] gap-4 xl:gap-6 overflow-x-auto pb-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-slate-300 rounded-lg h-96 flex-shrink-0 w-80"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};