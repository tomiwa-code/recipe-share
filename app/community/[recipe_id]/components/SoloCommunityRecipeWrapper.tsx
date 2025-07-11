import RecipeNotFound from "@/lib/ui/RecipeNotFound";
import React from "react";
import CommunityRecipeCard from "../../components/CommunityRecipeCard";
import RatingSummary from "./RatingSummary";
import ReviewsWrapper from "./ReviewsWrapper";

interface SoloCommunityRecipeWrapperProps {
  id: string;
}

// TODO:: Responsiveness - Make the component responsive

const SoloCommunityRecipeWrapper = async ({
  id,
}: SoloCommunityRecipeWrapperProps) => {
  // If recipe id is not found, return a Recipe not found component
  if (!id) {
    return <RecipeNotFound />;
  }

  return (
    <div className="max-w-3xl mx-auto min-h-screen w-full bg-white pb-10">
      <CommunityRecipeCard
        idx={0}
        className="backdrop-blur-none shadow-none rounded-none bg-transparent"
      />

      {/* Rating Summary */}
      <RatingSummary />

      {/* Reviews  */}
      <ReviewsWrapper />
    </div>
  );
};

export default SoloCommunityRecipeWrapper;
