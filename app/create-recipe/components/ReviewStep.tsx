import React from "react";
import { Badge } from "@/lib/ui/Badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { RecipeFormDataType } from "@/types/create-recipe.type";

interface ReviewStepProps {
  formData: RecipeFormDataType;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  const totalTime = formData.prepTime + formData.cookTime;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Review Your Recipe</h3>
        <p className="text-muted-foreground">
          Please review all the information before publishing your recipe.
        </p>
      </div>

      {/* Recipe Header */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt={formData.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-bold">{formData.title}</h4>
            <p className="text-muted-foreground mt-2">{formData.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <ChefHat className="w-3 h-3 mr-1" />
              {formData.cuisine}
            </Badge>
            <Badge
              variant={
                formData.difficulty === "easy"
                  ? "default"
                  : formData.difficulty === "medium"
                  ? "secondary"
                  : "destructive"
              }
            >
              {formData.difficulty}
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
              <p className="font-medium">{formData.prepTime}m</p>
              <p className="text-muted-foreground">Prep</p>
            </div>
            <div className="text-center">
              <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
              <p className="font-medium">{formData.cookTime}m</p>
              <p className="text-muted-foreground">Cook</p>
            </div>
            <div className="text-center">
              <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
              <p className="font-medium">{formData.servings}</p>
              <p className="text-muted-foreground">Servings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div>
        <h4 className="text-lg font-semibold mb-3">
          Ingredients ({formData.ingredients.length})
        </h4>
        <div className="grid md:grid-cols-2 gap-2">
          {formData.ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex justify-between items-center py-2 px-3 bg-muted/30 rounded"
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
      <div>
        <h4 className="text-lg font-semibold mb-3">
          Instructions ({formData.instructions.length} steps)
        </h4>
        <div className="space-y-4">
          {formData.instructions.map((instruction) => (
            <div key={instruction.id} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                {instruction.step}
              </div>
              <p className="text-sm leading-relaxed">
                {instruction.instruction}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-muted-foreground">
          By publishing this recipe, you agree to share it with the RecipeShare
          community. You can edit or delete your recipe at any time from your
          profile.
        </p>
      </div>
    </div>
  );
};
