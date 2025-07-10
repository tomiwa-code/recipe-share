"use client";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/Card";
import { Star } from "lucide-react";
import { Button } from "@/lib/ui/Button";
import { cn, formatRelativeTime, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import images from "@/constants/images";
import { ReviewType } from "@/types/recipe.type";

const reviews: ReviewType[] = [
  {
    _id: "1",
    user: {
      _id: "1",
      name: "John Doe",
      avatar: images.avatar_1.src,
    },
    rating: 5,
    createdAt: "2025-07-09T12:00:00Z",
    comment: "This recipe is amazing!",
    updatedAt: "2025-07-09T12:00:00Z",
  },
  {
    _id: "2",
    user: {
      _id: "2",
      name: "Jane Smith",
      avatar: images.avatar_2.src,
    },
    rating: 4,
    createdAt: "2025-06-29T12:00:00Z",
    comment: "Really enjoyed this dish.",
    updatedAt: "2025-06-29T12:00:00Z",
  },
  {
    _id: "3",
    user: {
      _id: "3",
      name: "Bob Johnson",
      avatar: images.avatar_3.src,
    },
    rating: 3,
    createdAt: "2025-01-03T12:00:00Z",
    comment: "It was okay, not my favorite.",
    updatedAt: "2025-01-03T12:00:00Z",
  },
];

const Reviews = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-16">
      <Card className="border-none bg-foreground md:px-5 py-8">
        <CardHeader>
          <CardTitle>Reviews (316)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-6 divide-y divide-gray-200">
          {reviews.map((review, idx) => (
            <div
              key={review._id}
              className={cn(
                "pb-4",
                idx === reviews.length - 1 ? "pb-0 border-none" : ""
              )}
            >
              <div className="flex items-center justify-between mb-3 md:mb-2">
                <div className="flex items-center gap-x-3">
                  {/* Avatar section */}
                  <div className="flex items-center gap-x-2">
                    <Avatar className={"size-8 bg-gray-200"}>
                      <AvatarImage src={review.user.avatar} />
                      <AvatarFallback className="uppercase">
                        {getInitials(review.user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Username and rating section  */}
                  <div className="flex md:items-center flex-col md:flex-row gap-x-2">
                    <span className="text-base font-medium text-black">
                      {review.user.name}
                    </span>

                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-3 md:size-4 ${
                            i < review.rating
                              ? "text-black fill-current"
                              : "text-sage-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date section */}
                <span className="text-sm text-gray-500">
                  {formatRelativeTime(review.createdAt)}
                </span>
              </div>

              {/* Reviews comment section */}
              <p className="text-gray-500 text-sm md:text-base">
                {review.comment}
              </p>
            </div>
          ))}

          <Button
            variant="outline"
            className="w-fit bg-transparent mx-auto border-gray-500 text-gray-600"
          >
            Load More Reviews
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;
