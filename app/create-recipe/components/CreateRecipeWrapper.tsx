"use client";
import React, { useState } from "react";
import { Button } from "@/lib/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import { parseAsNumberLiteral, useQueryState } from "nuqs";
import StepWrapper from "./StepWrapper";
import { RecipeFormDataType, StepsType } from "@/types/create-recipe.type";
import { BasicInfoStep } from "./BasicInfoStep";
import { IngredientsStep } from "./IngredientsStep";
import { InstructionsStep } from "./InstructionsStep";
import { ReviewStep } from "./ReviewStep";

const STEPS: StepsType[] = [
  { id: 1, title: "Basic Info", description: "Recipe details and image" },
  { id: 2, title: "Ingredients", description: "Add and manage ingredients" },
  {
    id: 3,
    title: "Instructions",
    description: "Step-by-step cooking instructions",
  },
  { id: 4, title: "Review", description: "Review and publish" },
];

const stepsArr = [1, 2, 3, 4] as const;

const CreateRecipeWrapper = () => {
  // Using nuqs for query state management
  const [step, setStep] = useQueryState(
    "step",
    parseAsNumberLiteral(stepsArr).withDefault(1)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<RecipeFormDataType>({
    title: "",
    description: "",
    cuisine: "",
    difficulty: "",
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    image: null,
    imagePreview: "",
    ingredients: [],
    instructions: [],
    tags: [],
  });

  const updateFormData = (updates: Partial<RecipeFormDataType>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step < STEPS.length) {
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
        cookTime: 0,
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
        description: "Failed to create recipe. Please try again.",
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
          formData.difficulty
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <BasicInfoStep formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <IngredientsStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <InstructionsStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden pt-32 pb-20">
      <BackgroundEffect />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Create New Recipe
          </h1>
          <p className="text-gray-500">
            Share your culinary creation with the community
          </p>
        </div>

        {/* STEPS */}
        <StepWrapper STEPS={STEPS} step={step} />

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle>{STEPS[step ?? 1 - 1].title}</CardTitle>
          </CardHeader>
          <CardContent>{renderStep()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            {step ?? 1 < STEPS.length ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? "Publishing..." : "Publish Recipe"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateRecipeWrapper;
