import React from "react";
import RecipeCard from "@/lib/ui/RecipeCard";

const RecipesWrapper = async () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 lg:grid-cols-3 2xl:grid-cols-4 gap-x-2 md:gap-x-4 lg:gap-x-8">
      {Array.from({ length: 12 }).map((_, idx) => {
        return <RecipeCard key={idx} idx={idx} />;
      })}
    </div>
  );
};

export default RecipesWrapper;
