import React from "react";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import HeaderBgImages from "./HeaderBgImages";
import FilterBar from "./FilterBar";
import RecipeCard from "@/lib/ui/RecipeCard";
import RecipesRightSide from "./RecipesRightSide";

const RecipesPageWrapper = () => {
  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <BackgroundEffect />

      <HeaderBgImages />

      <div className="container mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10">
        <div className="h-[300px] w-full flex items-center justify-center pt-32">
          <h2 className="text-4xl md:text-6xl font-semibold capitalize font-family-courgette">
            explore recipes
          </h2>
        </div>

        <FilterBar />

        <div className="w-full flex justify-between gap-x-16 mt-24">
          <div className="w-full md:flex-3 grid grid-cols-3 gap-y-28 gap-x-8">
            {Array.from({ length: 12 }).map((_, idx) => {
              return <RecipeCard key={idx} idx={idx} />;
            })}
          </div>

          <RecipesRightSide />
        </div>
      </div>
    </main>
  );
};

export default RecipesPageWrapper;
