import React from "react";
import RecipePageWrapper from "./components/RecipePageWrapper";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface RecipePageProps {
  params: Promise<{ _id: string }>;
}

const RecipePage = async ({ params }: RecipePageProps) => {
  const { _id } = await params;

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <BackgroundEffect />

      <div className="container mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10 pt-28 md:pt-32">
        {/* Link to go back to recipes page  */}
        <Link
          href="/recipes"
          className="inline-flex items-center text-gray-500 hover:text-sage-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Recipes
        </Link>

        {/* Show a loading state while the recipe is being fetched */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <RecipePageWrapper id={_id} />
        </React.Suspense>
      </div>
    </main>
  );
};

export default RecipePage;
