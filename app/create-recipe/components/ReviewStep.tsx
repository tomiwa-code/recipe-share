import React from "react";
import { Badge } from "@/lib/ui/Badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { RecipeFormDataType } from "@/types/recipe.type";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewStepProps {
  formData: RecipeFormDataType;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <div className="flex flex-col gap-y-6">
      {/* Recipe Header */}
      <div className="flex flex-col items-start gap-y-2">
        <h3 className="text-lg font-semibold">Review Your Recipe</h3>
        <p className="text-gray-500 text-sm">
          Please review all the information before publishing your recipe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 gap-y-4">
        {/* Recipe Image */}
        <div className="relative h-64 rounded-lg overflow-hidden">
          {formData.imagePreview && (
            <Image
              src={formData.imagePreview}
              alt={formData.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        <div className="flex flex-col gap-y-4">
          {/* Description  */}
          <div className="flex flex-col gap-y-2">
            <h4 className="text-xl font-bold capitalize">{formData.title}</h4>
            <p className="text-gray-500 text-sm max-w-sm">
              {formData.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {/* Cuisine Type: */}
            <Badge
              variant="secondary"
              className="bg-gray-200 py-1 rounded-full text-black"
            >
              <ChefHat className="w-3 h-3 mr-1" />
              {formData.cuisine}
            </Badge>

            {/* Difficulty Level:  */}
            <Badge
              className={cn(
                "py-1 rounded-full font-normal text-black min-w-16",
                {
                  "bg-emerald-500": formData.difficulty === "easy",
                  "bg-yellow-500": formData.difficulty === "medium",
                  "bg-red-500 text-white": formData.difficulty === "hard",
                }
              )}
            >
              {formData.difficulty}
            </Badge>
          </div>

          <div className="flex items-center gap-x-6 text-sm mt-2">
            {/* Prep Time  */}
            <div className="text-center flex items-center gap-x-2 text-gray-600">
              <Clock className="size-4 text-gray-500" />
              <p className="font-medium">{formData.prepTime}m</p>
              <p className="text-muted-foreground">Prep</p>
            </div>

            {/* Servings  */}
            <div className="text-center flex items-center gap-x-2 text-gray-600">
              <Users className="size-4 text-gray-500" />
              <p className="font-medium">{formData.servings}</p>
              <p className="text-muted-foreground">Servings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="flex flex-col gap-y-3">
        <h4 className="text-lg font-semibold">
          Ingredients ({formData.ingredients.length})
        </h4>

        <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
          {formData.ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex justify-between items-center py-2.5 px-4 bg-gray-50 rounded-lg"
            >
              <span>{ingredient.name}</span>
              <span className="text-sm text-muted-foreground">
                {ingredient.amount} {ingredient.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="flex flex-col gap-y-3">
        <h4 className="text-lg font-semibold">
          Instructions ({formData.instructions.length} steps)
        </h4>

        <div className="flex-col flex gap-y-4 max-w-xl w-full">
          {formData.instructions.map((instruction) => (
            <div key={instruction.id} className="flex gap-3">
              <div className="size-8 rounded-full bg-red-400 text-white flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                {instruction.step}
              </div>

              <p className="text-sm leading-relaxed">
                {instruction.instruction}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 border-dashed border-gray-200">
        <p className="text-sm text-gray-500">
          By publishing this recipe, you agree to share it with the RecipeShare
          community. You can edit or delete your recipe at any time from your
          profile.
        </p>
      </div>
    </div>
  );
};

export default ReviewStep;
