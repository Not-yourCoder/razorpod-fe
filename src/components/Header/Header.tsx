
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import NavBar from '../NavMenu/NavBar'
import type { AppDispatch, RootState } from '@/store/store'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '@/store/slices/categorySlice'
import { useSelector } from 'react-redux'
import { Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react';
import { AiBeautifyIcon } from '@hugeicons/core-free-icons';
import { images } from '@/constants/Images'
import { ChevronRight } from 'lucide-react'
import Featured from './FeaturedItems/Featured'
import type { Product } from '@/store/types'
import { setCategoryIcon } from '@/utils/utils'
import { ProductDetailPage } from '@/pages/NewProductDetails'
import { clearSelectedProduct, fetchProductsByCategory, selectProduct } from '@/store/slices/productSlice'

type Props = {
    headerHeight: boolean
    setHeaderHeight: Dispatch<SetStateAction<boolean>>
}

const Header = ({ headerHeight, setHeaderHeight }: Props) => {
    const handleCollapse = () => setHeaderHeight(false);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categories = useSelector((state: RootState) => state.categories.categories);
    const products = useSelector((state: RootState) => state.products.products);
    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);

    const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);

    console.log("selectedCategory", selectedCategory)
    const handleProductClick = (product: Product) => {
        dispatch(selectProduct(product));
        // dispatch(selectProduct(product));
    };

    const handleBackToGrid = () => {
        dispatch(clearSelectedProduct());
    };

    const handleProductByCategory = (category: string) => {
        console.log("category", category)
        dispatch(fetchProductsByCategory(category))
    }
    if (selectedProduct) {
        return (
            <ProductDetailPage
                product={selectedProduct}
                onBack={handleBackToGrid}
            />
        );
    }
    return (
        <div style={{ height: `${headerHeight ? "600px" : "140px"}` }} className={` w-full py-12 px-18 border-b-2 fixed top-0 border-accent-foreground duration-300 ease-in-out overflow-hidden z-40`} onMouseLeave={handleCollapse}>
            <div className='flex justify-between items-center'>
                <div className="logo h-10">
                    <img src={images.logoWithname} alt='razorpod-logo' className='h-18' />
                </div>
                <NavBar setHeaderHeight={setHeaderHeight} />
            </div>
            <div className={` ${headerHeight ? "h-full p-4" : "h-0 hidden pointer-none"} bg-white w-[90vw] top-30 absolute z-50 transition-all duration-300 grid grid-cols-12 gap-6 items-start`}>
                {/* Left side category list */}
                <div className='col-span-3'>
                    <h1 className='text-xl mb-4'>Categories</h1>
                    <div className='flex flex-col gap-4 min-h-90'>
                        {categories.slice(0, 8).map((category: any) => (
                            <div className='flex items-center gap-2' onClick={() => handleProductByCategory(category.slug)}>
                                {setCategoryIcon(category.name)}
                                <Link
                                    key={category.slug}
                                    title={category.name}
                                    to={""}
                                    className="text-xl font-medium hover:text-blue-600 transition"
                                >
                                    {category.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center mt-4'>
                        <Link className='text-xl hover:text-red-700' to={"/categories"}>View All Categories</Link>
                        <ChevronRight size={22} />
                    </div>
                </div>

                {/* Right side featured categories */}
                <div className='col-span-9'>
                    <h1 className='text-xl mb-4'>Featured Items</h1>
                    <div className='grid grid-cols-4 gap-4 overflow-hidden w-full'>
                        {products.slice(0, 8).map((product: Product, index: number) => (
                            <Featured key={index} productLabel={product.title} image={product.thumbnail} brand={product.brand} onClick={() => handleProductClick(product)} />
                        ))}
                    </div>
                    <div className='flex items-center mt-4'>
                        <Link className='text-xl hover:text-red-700' to={"/categories"}>View All Products</Link>
                        <ChevronRight size={22} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header