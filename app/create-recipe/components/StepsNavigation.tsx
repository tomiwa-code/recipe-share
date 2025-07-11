"use client";
import React from "react";

import { Button } from "@/lib/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { RecipeFormDataType } from "@/types/recipe.type";

interface StepsNavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
  formData: RecipeFormDataType;
  setFormData: React.Dispatch<React.SetStateAction<RecipeFormDataType>>;
  stepsLength: number;
}

const StepsNavigation: React.FC<StepsNavigationProps> = ({
  step,
  setStep,
  formData,
  setFormData,
  stepsLength,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const nextStep = () => {
    if (step < stepsLength) {
      setStep((step + 1) as 1 | 2 | 3 | 4);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep((step - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Recipe Created", {
        description: "Your recipe has been created successfully.",
      });

      // Reset form or redirect
      setFormData({
        title: "",
        description: "",
        cuisine: "",
        difficulty: "",
        prepTime: 0,
        servings: 1,
        image: null,
        imagePreview: "",
        ingredients: [],
        instructions: [],
        tags: [],
      });

      setStep(1 as 1 | 2 | 3 | 4);
    } catch (error) {
      toast.error("Failed to create recipe", {
        description: `Failed to create recipe. Please try again. ${error}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formData.title &&
          formData.description &&
          formData.cuisine &&
          formData.difficulty &&
          formData.prepTime > 0 &&
          formData.servings > 0 &&
          formData.image
        );
      case 2:
        return formData.ingredients.length > 0;
      case 3:
        return formData.instructions.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={prevStep}
        disabled={step === 1}
        className="flex items-center gap-2 bg-transparent text-black"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      <div className="flex gap-2">
        {step < stepsLength ? (
          <Button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="flex items-center gap-2 text-white bg-red-600"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="flex items-center gap-2 text-white bg-blue-600"
          >
            {isSubmitting ? "Publishing..." : "Publish Recipe"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepsNavigation;
