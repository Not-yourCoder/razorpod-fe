import NoItems from "@/components/NoItem/NoItems";
import { ProductDetailPage } from "@/components/Product/ProductDetails";
import { fetchCategories } from "@/store/slices/categorySlice";
import { clearSelectedProduct, fetchProducts, fetchProductsByCategory, selectProduct } from "@/store/slices/productSlice";
import type { AppDispatch, RootState } from "@/store/store";
import type { Product } from "@/store/types";
import { setCategoryIcon } from "@/utils/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type Props = {}

const ProductCategory = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const [selectedCategory, setselectedCategory] = useState<string>("All Products")

  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.categories);
  const categoriesWithAll = [{ slug: "all", name: "All Products", url: "" }, ...categories]
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
      <section className="h-72 w-full bg-slate-200 grid grid-cols-2 justify-center items-center text-center mb-8">
        <h1 className="font-semibold text-5xl ">Our Best Products</h1>
        <p className="font-light text-xl ">Not all those who wander are lost… some are just shopping for something better.</p>
      </section>
      <section className="max-w-7xl mx-auto my-0">

        {products.length > 0 &&
          <section className="flex gap-4 items-center py-6 text-2xl">
            <div className="p-2 rounded-full hover:bg-slate-300 hover:scale-105 duration-300 hover:cursor-pointer hover:text-white" onClick={gotoHome}>
              <ChevronLeft size={28} />
            </div>
            <h1>{selectedCategory}</h1>
          </section>
        }
        <section className="grid grid-cols-12 gap-6 max-h-[38rem] overflow-auto">
          {products.length > 0 ? (
            <div className="products grid grid-cols-4 gap-4 col-span-8 max-h-44">
              {
                products.map((product, index) => (
                  <div key={index} className="w-fit bg-slate-300 p-4 rounded-lg text-center hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-sm" onClick={() => handleProductClick(product)}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div>
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 mt-[-300px] col-span-8">
              <NoItems />
            </div>
          )}

          <div className="filters col-span-4 max-h-[95vh] overflow-auto">
            <h1 className="text-2xl mb-4">Filter by Category</h1>
            {categoriesWithAll.map((category: any) => (
              <div className={`flex items-center gap-2 hover:bg-slate-200 rounded-sm p-2 overflow-auto ${selectedCategory === category.slug || selectedCategory === category.name ? "bg-red-200" : ""}`} onClick={() => handleProductByCategory(category)}>
                {setCategoryIcon(category.name)}
                <Link
                  key={category.slug}
                  title={category.name}
                  to={""}
                  className="text-xl font-medium transition"
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default ProductCategory