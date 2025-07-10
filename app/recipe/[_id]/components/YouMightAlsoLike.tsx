import RecipeCard from "@/lib/ui/RecipeCard";
import React from "react";

const YouMightAlsoLike = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      <h2 className="text-xl font-semibold mb-28">You Might Also Like</h2>

      <div className="w-full md:flex-3 grid grid-cols-3 gap-y-28 gap-x-8">
        {Array.from({ length: 3 }).map((_, idx) => {
          return <RecipeCard key={idx} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default YouMightAlsoLike;
