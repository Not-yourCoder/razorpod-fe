import type { Product } from '@/store/types';

const ProductInfo = ({ product }: { product: Product }) => (
    <div className="space-y-4 mb-8">
        <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="text-gray-600">{product.description}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Category</h3>
            <p className="text-gray-600 capitalize">{product.category}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Brand</h3>
            <p className="text-gray-600">{product.brand}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Stock</h3>
            <p className="text-gray-600">{product.stock}</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Warranty</h3>
            <p className="text-gray-600">2 Years</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Shipping</h3>
            <p className="text-gray-600">Free worldwide shipping</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Return Policy</h3>
            <p className="text-gray-600">30 days return policy</p>
        </div>
    </div>
);

export default ProductInfo;
