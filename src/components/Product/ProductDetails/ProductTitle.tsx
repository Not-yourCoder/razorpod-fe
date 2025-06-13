import type { Product } from '@/store/types';

const ProductTitle = ({ product }: { product: Product }) => (
    <>
        <div className="absolute top-24 left-6 z-20">
            <h1 className="text-white text-4xl font-bold">{product.title}</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-slate-500/10 font-bold text-9xl">{product.title.substring(0, 2).toUpperCase()}</span>
        </div>
    </>
);
export default ProductTitle;
