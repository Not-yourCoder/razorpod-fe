import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import type { AppDispatch, RootState } from '../store/store';
import { fetchProductById } from '../store/slices/productSlice';
import { productDetailRoute } from '../app/routes/routes';

const ProductDetail = () => {
    const { id } = useParams({ from: productDetailRoute.id });
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const product = useSelector((state: RootState) =>
        state.products.products.find((p) => p.id === Number(id))
    );

    const loading = useSelector((state: RootState) => state.products.loading);

    useEffect(() => {
        if (!product) {
            dispatch(fetchProductById(Number(id)));
        }
    }, [id, product, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>No product found.</div>;

    return (
        <div className="p-4">
            <button onClick={() => navigate({ to: '/' })}>⬅️ Back</button>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="my-4 w-64" />
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default ProductDetail;
