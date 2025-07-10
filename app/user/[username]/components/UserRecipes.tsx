import RecipeCard from "@/lib/ui/RecipeCard";
import React from "react";

interface UserRecipesProps {
  userId: string;
}

const UserRecipes = ({ userId }: UserRecipesProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-6 px-4 mt-14 pb-10">
      {/* TODO:: Remove this later  */}
      <p className="hidden">{userId}</p>

      {Array.from({ length: 4 }).map((_, idx) => {
        return <RecipeCard key={idx} idx={idx} />;
      })}
    </div>
  );
};

export default UserRecipes;
