import { images } from "@/constants/Images";

const ProductHeader = () => (
    <div className="absolute top-6 left-6 z-20 flex items-center space-x-4 mt-[-10px]">
        <div className="w-56">
            <img src={images.logoWithname} />
        </div>
    </div>
);
export default ProductHeader;
