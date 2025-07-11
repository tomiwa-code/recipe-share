import React from "react";

import { Card, CardHeader, CardContent, CardTitle } from "@/lib/ui/Card";
import StarRating from "@/lib/ui/StarRating";
import { Star } from "lucide-react";
import { ReviewStats } from "@/types/recipe.type";

const RatingSummary = () => {
  const totalReviews = 156;
  const averageRating = 4.8;
  const ratingDistribution: ReviewStats = {
    5: 120,
    4: 25,
    3: 7,
    2: 3,
    1: 1,
  };

  return (
    <Card className="rounded-none border-0 border-b border-gray-300 shadow-none">
      <CardHeader>
        <CardTitle>
          <span>Reviews & Ratings</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center gap-6">
          {/* Overall Rating */}
          <div className="flex-1 flex items-center justify-center flex-col text-center gap-y-3">
            <div className="text-2xl md:text-4xl font-bold text-black">
              {averageRating}
            </div>
            <StarRating rating={averageRating} size="lg" />
            <p className="text-sm md:text-base text-gray-600 font-medium">{totalReviews} reviews</p>
          </div>

          {/* Rating Distribution */}
          <div className="flex-2 space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingDistribution[stars] || 0;
              const percentage =
                totalReviews > 0 ? (count / totalReviews) * 100 : 0;

              return (
                <div key={stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-12">
                    <span className="text-sm text-sage-600">{stars}</span>
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 h-2 bg-sage-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-sage-600 w-12 text-right">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingSummary;
