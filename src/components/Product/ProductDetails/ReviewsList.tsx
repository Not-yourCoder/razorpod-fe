import { Star } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/Ui/card";

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};

type Props = {
    review: Review;
};

const ReviewsList = ({ review }: Props) => {
    const formattedDate = format(new Date(review.date), "dd MMM yyyy");

    console.log(review)
    return (
        <Card className="border rounded-lg shadow-sm">
            <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="font-semibold text-lg">{review.reviewerName}</div>
                    <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-gray-600 text-sm">{formattedDate}</div>

                <p className="text-base text-gray-800">“{review.comment}”</p>
            </CardContent>
        </Card>
    );
};

export default ReviewsList;
