import { useDispatch } from "react-redux";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Ui/select";
import { setSortBy } from "@/store/slices/productSlice";

const ProductSortSelect = () => {
    const dispatch = useDispatch();

    return (
        <Select onValueChange={(value) => dispatch(setSortBy(value as any))}>
            <SelectTrigger className="w-fit border-0 text-black text-md">
                <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default ProductSortSelect;
