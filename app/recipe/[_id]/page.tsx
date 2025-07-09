import React from "react";
import RecipePageWrapper from "./components/RecipePageWrapper";

interface RecipePageProps {
  params: Promise<{ _id: string }>;
}

const RecipePage = async ({ params }: RecipePageProps) => {
  const { _id } = await params;

  return <RecipePageWrapper id={_id} />;
};

export default RecipePage;
