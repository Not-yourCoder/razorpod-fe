import type { Category } from "@/store/types";
import { Badge } from "../Ui/badge";


type Props = {
    categories: Category[];
    selectedCategory: string;
    onSelect: (category: Category) => void;
};

export const CategoryBadges = ({ categories, selectedCategory, onSelect }: Props) => {
    return (
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((category) => (
                <Badge
                    key={category.slug}
                    onClick={() => onSelect(category)}
                    className={`cursor-pointer text-sm md:text-base ${selectedCategory == category.slug || selectedCategory == category.name
                            ? "bg-slate-700 text-slate-200"
                            : "bg-slate-200 hover:bg-slate-300 text-slate-700"
                        }`}
                >
                    {category.name}
                </Badge>
            ))}
        </div>
    );
};
