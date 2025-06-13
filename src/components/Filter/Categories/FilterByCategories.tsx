import type { Category } from '@/store/types'
import { setCategoryIcon } from '@/utils/utils'
import { Link } from '@tanstack/react-router'

type Props = {
    categoriesWithAll: Category[]
    selectedCategory: string
    handleProductByCategory: (category: Category) => void
}

const FilterByCategories = ({ categoriesWithAll, handleProductByCategory, selectedCategory }: Props) => {
    return (
        <div className="filters col-span-3 max-h-fit overflow-auto no-scrollbar">
            <h1 className="text-2xl mb-4">Filter by Category</h1>
            {categoriesWithAll.map((category: Category) => (
                <div className={`flex items-center gap-2 hover:bg-slate-200 rounded-sm p-2 overflow-auto ${selectedCategory === category.slug || selectedCategory === category.name ? "bg-gradient-to-br from-slate-600 to-slate-400 text-white" : ""}`} onClick={() => handleProductByCategory(category)}>
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
    )
}

export default FilterByCategories