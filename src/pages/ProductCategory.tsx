/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryBadges } from "@/components/CategoryBadges/CategoryBadge";
import FilterByCategories from "@/components/Filter/Categories/FilterByCategories";
import NoItems from "@/components/NoItem/NoItems";
import ProductCardTypeTwo from "@/components/Product/ProductCard/ProductCardTypeTwo";
import ProductCatHeader from "@/components/Product/ProductCategoryPage/ProductCatHeader";
import { ProductDetailPage } from "@/components/Product/ProductDetails";
import { fetchCategories } from "@/store/slices/categorySlice";
import { clearSelectedProduct, fetchProducts, fetchProductsByCategory, selectProduct } from "@/store/slices/productSlice";
import type { AppDispatch, RootState } from "@/store/store";
import type { Category, Product } from "@/store/types";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const ProductCategory = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const [selectedCategory, setselectedCategory] = useState<string>("All Products")
  const [wishlist, setWishlist] = useState<Product[]>([])

  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.categories);
  const categoriesWithAll: Category[] = [
    { slug: "all", name: "All Products", url: "" },
    ...categories
  ];
  const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleProductClick = (product: Product) => {
    dispatch(selectProduct(product));
  };

  const handleBackToGrid = () => {
    dispatch(clearSelectedProduct());
  };

  const gotoHome = () => {
    navigate({ to: "/" })
  }

  const handleProductByCategory = (category: any) => {
    if (category.slug == "all") {
      dispatch(fetchProducts())
      setselectedCategory(category.name)
      return
    }
    dispatch(fetchProductsByCategory(category.name))
    setselectedCategory(category.name)
  }

  const handleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isWishlisted = prev.some((item) => item.id === product.id);
      if (isWishlisted) {
        toast(`${product.title} removed wishlist`, {
          icon: '💔',
        });
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast(`${product.title} wishlisted`, {
          icon: '❤️',
        });
        return [...prev, product];
      }
    });
  };

  if (selectedProduct) {
    return (
      <ProductDetailPage
        product={selectedProduct}
        onBack={handleBackToGrid}
      />
    );
  }
  return (
    <div className="">
      {/* Hero Section */}
      <section className="h-64 md:h-72 w-full bg-slate-200 grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center mb-8 px-4">
        <h1 className="font-semibold text-4xl md:text-5xl">Our Best Products</h1>
        <p className="font-light text-lg md:text-xl mt-4 md:mt-0">
          Not all those who wander are lost… some are just shopping for something better.
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">

        {products.length > 0 && (
          <ProductCatHeader selectedCategory={selectedCategory} gotoHome={gotoHome} />
        )}
        {/* Mobile & Tablet: Category badges */}
        <div className="block lg:hidden mb-4">
          <h1 className="mb-4 ml-2 text-lg">Filter by Categories</h1>
          <CategoryBadges
            categories={categoriesWithAll}
            selectedCategory={selectedCategory}
            onSelect={handleProductByCategory}
          />
        </div>
        {/* Products and Filters */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[calc(100vh-8rem)] overflow-auto no-scrollbar">

          {/* Product List */}
          {products.length > 0 ? (
            <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 col-span-1 lg:col-span-9 p-2">
              {products.map((product, index) => (
                <ProductCardTypeTwo
                  key={index}
                  handleProductClick={handleProductClick}
                  handleWishlist={handleWishlist}
                  product={product}
                  wishlist={wishlist}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 col-span-1 lg:col-span-9">
              <NoItems />
            </div>
          )}

          {/* Filters */}
          <div className="hidden lg:block col-span-3">
            <FilterByCategories
              categoriesWithAll={categoriesWithAll}
              handleProductByCategory={handleProductByCategory}
              selectedCategory={selectedCategory}
            />
          </div>

        </section>
      </section>
    </div>
  
  )
}

export default ProductCategory