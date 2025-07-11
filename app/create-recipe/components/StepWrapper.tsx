import React from "react";

import { Progress } from "@/lib/ui/Progress";
import { StepsType } from "@/types/create-recipe.type";

interface StepsWrapperProps {
  STEPS: StepsType[];
  step: number;
}

const StepWrapper = ({ STEPS, step }: StepsWrapperProps) => {
  const progress = (step / STEPS.length) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {STEPS.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= item.id
                  ? "bg-red-500 text-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
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
              <div className="w-12 sm:w-24 h-px bg-gray mx-4" />
            )}
          </div>
        ))}
      </div>

      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default StepWrapper;
