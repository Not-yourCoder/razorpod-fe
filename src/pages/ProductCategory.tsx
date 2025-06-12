import NoItems from "@/components/NoItem/NoItems";
import { fetchCategories } from "@/store/slices/categorySlice";
import { fetchProducts, fetchProductsByCategory } from "@/store/slices/productSlice";
import type { AppDispatch, RootState } from "@/store/store";
import { setCategoryIcon } from "@/utils/utils";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type Props = {}

const ProductCategory = (props: Props) => {
  const [selectedCategory, setselectedCategory] = useState<string>("All Products")
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector((state: RootState) => state.categories.categories);

  const categoriesWithAll = [{ slug: "all", name: "All Products", url: "" }, ...categories]
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleProductByCategory = (category: any) => {
    if (category.slug == "all") {
      dispatch(fetchProducts())
      setselectedCategory(category.name)
      return
    }
    dispatch(fetchProductsByCategory(category.name))
    setselectedCategory(category.name)
  }
  return (
    <div className="">
      <section className="h-72 w-full bg-slate-200 grid grid-cols-2 justify-center items-center text-center mb-8">
        <h1 className="font-semibold text-5xl ">Our Best Products</h1>
        <p className="font-light text-xl ">Not all those who wander are lost… some are just shopping for something better.</p>
      </section>
      <section className="max-w-7xl mx-auto my-0">

        {products.length > 0 &&
          <section className="py-6 text-2xl">
            <h1>{selectedCategory}</h1>
          </section>
        }
        <section className="grid grid-cols-12 gap-6 max-h-[38rem] overflow-auto">
          {products.length > 0 ? (
            <div className="products grid grid-cols-4 gap-4 col-span-8">
              {
                products.map((product, index) => (
                  <div key={index} className="w-fit bg-slate-300 p-4 rounded-lg text-center">
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