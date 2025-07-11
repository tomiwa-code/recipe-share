"use client";
import { useState } from "react";
import { Card, CardContent } from "@/lib/ui/Card";
import { Button } from "@/lib/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import StarRating from "@/lib/ui/StarRating";
import { ReviewType } from "@/types/recipe.type";
import { cn, formatRelativeTime, getInitials } from "@/lib/utils";

interface ReviewCardProps {
  review: ReviewType;
  className?: string;
}

const ReviewCard = ({ review, className }: ReviewCardProps) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const isLongComment = review.comment.length > 300;
  const displayComment =
    showFullComment || !isLongComment
      ? review.comment
      : `${review.comment.substring(0, 300)}...`;

  return (
    <Card
      className={cn(
        "shadow-none border-gray-300",
        className
      )}
    >
      <CardContent className="px-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex gap-x-3">
              <Avatar className="size-10 bg-gray-100">
                <AvatarImage src={review.user.avatar} />
                <AvatarFallback className="bg-sage-100 text-sage-700">
                  {getInitials(review.user.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-y-1 text-sm text-sage-600">
                <div className="flex md:items-center flex-col md:flex-row gap-x-2">
                  <span className="text-base font-medium text-black">
                    {review.user.name}
                  </span>

                  <span>•</span>
                  <span>{formatRelativeTime(review.createdAt)}</span>
                </div>

                <StarRating rating={review.rating} size="sm" />
              </div>
            </div>
          </div>

          {/* Title */}
          {review.title && (
            <h4 className="font-semibold text-black">{review.title}</h4>
          )}

          {/* Comment */}
          <div className="space-y-2">
            <p className="text-gray-600 text-sm leading-relaxed">
              {displayComment}
            </p>
            {isLongComment && (
              <Button
                variant="link"
                size="sm"
                onClick={() => setShowFullComment(!showFullComment)}
                className="h-auto p-0 text-gray-700 hover:text-gray-800"
              >
                {showFullComment ? "Show less" : "Read more"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
