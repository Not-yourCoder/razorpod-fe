import type { Product } from "@/store/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/Ui/carousel";
import { Card, CardContent } from "@/components/Ui/card";


type Props = {
    product: Product;
};

const ProductImageCarousel = ({ product }: Props) => {
    const images = product.images && product.images.length > 0
        ? product.images
        : [product.thumbnail];

    return (
        <div className="w-full max-w-lg mx-auto my-36">
            <Carousel>
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index} >
                            <div className="p-1">
                                <Card className="bg-transparent border-none shadow-none">
                                    <CardContent className=" flex items-center justify-center p-4">
                                        <img
                                            src={img}
                                            alt={`${product.title} ${index + 1}`}
                                            className="object-contain w-full h-[60vh] rounded-lg"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Previous/Next Buttons */}
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default ProductImageCarousel;
