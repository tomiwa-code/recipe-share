"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/ui/Card";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import { parseAsNumberLiteral, useQueryState } from "nuqs";
import StepWrapper from "./StepWrapper";
import BasicInfoStep from "./BasicInfoStep";
import IngredientsStep from "./IngredientsStep";
import InstructionsStep from "./InstructionsStep";
import ReviewStep from "./ReviewStep";
import { RecipeFormDataType, StepsType } from "@/types/recipe.type";
import StepsNavigation from "./StepsNavigation";

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

  const [formData, setFormData] = useState<RecipeFormDataType>({
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

  const stepOneIsCompleted = useMemo(() => {
    return (
      formData.title.trim().length > 0 &&
      formData.description.trim().length > 0 &&
      formData.cuisine.trim().length > 0 &&
      formData.difficulty.trim().length > 0 &&
      formData.servings > 0 &&
      formData.prepTime > 0 &&
      formData.image !== null
    );
  }, [formData]);

  const stepTwoIsCompleted = useMemo(() => {
    return formData.ingredients.length > 0;
  }, [formData]);

  const stepThreeIsCompleted = useMemo(() => {
    return formData.instructions.length > 0;
  }, [formData]);

  const updateFormData = (updates: Partial<RecipeFormDataType>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <BasicInfoStep formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return !stepOneIsCompleted ? null : (
          <IngredientsStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return !stepTwoIsCompleted ? null : (
          <InstructionsStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return !stepThreeIsCompleted ? null : (
          <ReviewStep formData={formData} />
        );
      default:
        return null;
    }
  };

  // Disable future steps if previous steps are not completed
  React.useEffect(() => {
    if (step === 2 && !stepOneIsCompleted) {
      setStep(1);
    } else if (step === 3 && !stepTwoIsCompleted) {
      setStep(2);
    } else if (step === 4 && !stepThreeIsCompleted) {
      setStep(3);
    }
  }, [
    step,
    stepOneIsCompleted,
    stepTwoIsCompleted,
    stepThreeIsCompleted,
    setStep,
  ]);

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
        <StepWrapper STEPS={STEPS} step={step} setStep={setStep} />

        {/* Form Content */}
        <Card className="border-none shadow-none bg-white">
          <CardHeader>
            <CardTitle>{STEPS[step - 1].title}</CardTitle>
          </CardHeader>
          <CardContent className="min-h-52">{renderStep()}</CardContent>
        </Card>

        {/* Navigation */}
        <StepsNavigation
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          stepsLength={STEPS.length}
        />
      </div>
    </main>
  );
};

export default CreateRecipeWrapper;
