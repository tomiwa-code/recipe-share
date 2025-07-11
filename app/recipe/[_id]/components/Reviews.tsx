import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/Card";
import { Button } from "@/lib/ui/Button";
import { cn } from "@/lib/utils";
import { reviewsArr } from "@/data";
import ReviewCard from "@/lib/ui/ReviewCard";
import Link from "next/link";

const Reviews = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-16">
      <Card className="border-none bg-foreground md:px-5 py-8">
        <CardHeader>
          <CardTitle>Reviews (316)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-6 divide-y divide-gray-200">
          {reviewsArr.slice(0, 3).map((review, idx) => (
            <ReviewCard
              key={review._id}
              review={review}
              className={cn(
                "mt-0 backdrop-blur-none bg-transparent rounded-none border-0 shadow-none border-b border-gray-300",
                idx === 2 && "border-0"
              )}
            />
          ))}

          <Link
            href={"/community/1"}
            className="w-full flex items-center justify-center"
          >
            <Button
              variant="outline"
              className="w-fit bg-transparent mx-auto border-gray-500 text-gray-600"
            >
              Explore More Reviews
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;
