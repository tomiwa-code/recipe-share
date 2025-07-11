"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  className?: string;
}

const StarRating = ({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRatingChange,
  className,
}: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className={cn("flex items-center space-x-0.5", className)}>
      {[...Array(maxRating)].map((_, index) => {
        const starRating = index + 1;
        const isFilled = starRating <= rating;

        return (
          <Star
            key={index}
            className={cn(
              sizeClasses[size],
              isFilled ? "text-yellow-400 fill-current" : "text-gray-500",
              interactive &&
                "cursor-pointer hover:text-yellow-400 transition-colors"
            )}
            onClick={() => handleStarClick(starRating)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
