import React from "react";
import RecipeNotFound from "./RecipeNotFound";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RecipeHeroSection from "./RecipeHeroSection";
import NutritionAndImage from "./NutritionAndImage";
import IngredientsAndInstruction from "./IngredientsAndInstruction";
import Reviews from "./Reviews";
import YouMightAlsoLike from "./YouMightAlsoLike";

interface RecipePageWrapper {
  id: string;
}

const RecipePageWrapper = ({ id }: RecipePageWrapper) => {
  // If recipe id is not found, return a Recipe not found component
  if (!id) {
    return <RecipeNotFound />;
  }

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <div className="container mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10 pt-28 md:pt-32">
        {/* Link to go back to recipes page  */}
        <Link
          href="/recipes"
          className="inline-flex items-center text-gray-500 hover:text-sage-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        <RecipeHeroSection />
        <NutritionAndImage />
        <IngredientsAndInstruction />
        <Reviews />
        <YouMightAlsoLike />
      </div>
    </main>
  );
};

export default RecipePageWrapper;
