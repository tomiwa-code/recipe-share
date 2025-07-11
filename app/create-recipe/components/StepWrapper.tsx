import React from "react";

import { Progress } from "@/lib/ui/Progress";
import { StepsType } from "@/types/recipe.type";

interface StepsWrapperProps {
  STEPS: StepsType[];
  step: number;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>;
}

const StepWrapper = ({ STEPS, step, setStep }: StepsWrapperProps) => {
  const progress = (step / STEPS.length) * 100;

  // Go back to the previous step
  const handleClick = (id: 1 | 2 | 3 | 4) => {
    if (id > step) return;

    setStep(id);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {STEPS.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium select-none ${
                step >= item.id
                  ? "bg-red-500 text-foreground cursor-pointer"
                  : "bg-muted text-muted-foreground"
              }`}
              onClick={() => handleClick((index + 1) as 1 | 2 | 3 | 4)}
            >
              {item.id}
            </div>

            <div className="flex-1 ml-2 hidden sm:block">
              <p
                className={`text-sm font-medium ${
                  step >= item.id ? "text-black" : "text-gray-600"
                }`}
              >
                {item.title}
              </p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>

            {index < STEPS.length - 1 && (
              <div className="w-12 sm:w-24 h-px bg-gray-300 mx-4" />
            )}
          </div>
        ))}
      </div>

      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default StepWrapper;
