"use client";
import React from "react";
import ReviewCard from "@/lib/ui/ReviewCard";
import { reviewsArr } from "@/data";

const ReviewsWrapper = () => {
  const [reviews] = React.useState(reviewsArr);

  return (
    <div className="flex flex-col px-4 gap-y-6 mt-5">
      {reviews.map((review) => {
        return <ReviewCard key={review._id} review={review} />;
      })}
    </div>
  );
};

export default ReviewsWrapper;
