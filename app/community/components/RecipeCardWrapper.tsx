import CommunityRecipeCard from "@/app/community/components/CommunityRecipeCard";
import React from "react";

const RecipeCardWrapper = async () => {
  return (
    <div className="flex flex-col gap-y-8">
      {Array.from({ length: 12 }).map((_, idx) => {
        return <CommunityRecipeCard key={idx} idx={idx} />;
      })}
    </div>
  );
};

export default RecipeCardWrapper;
