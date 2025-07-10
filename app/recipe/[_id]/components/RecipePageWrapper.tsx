import RecipeNotFound from "./RecipeNotFound";
import RecipeHeroSection from "./RecipeHeroSection";
import NutritionAndImage from "./NutritionAndImage";
import IngredientsAndInstruction from "./IngredientsAndInstruction";
import Reviews from "./Reviews";
import YouMightAlsoLike from "./YouMightAlsoLike";

interface RecipePageWrapper {
  id: string;
}

const RecipePageWrapper = async ({ id }: RecipePageWrapper) => {
  // If recipe id is not found, return a Recipe not found component
  if (!id) {
    return <RecipeNotFound />;
  }

  return (
    <>
      <RecipeHeroSection />
      <NutritionAndImage />
      <IngredientsAndInstruction />
      <Reviews />
      <YouMightAlsoLike />
    </>
  );
};

export default RecipePageWrapper;
