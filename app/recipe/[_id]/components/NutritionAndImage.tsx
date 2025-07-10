import React from "react";

import Image from "next/image";
import { Button } from "@/lib/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/lib/ui/Tooltip";
import { Bookmark, Copy } from "lucide-react";

const nutritionArr = [
  { label: "Calories", value: "320" },
  { label: "Protein", value: "12g" },
  { label: "Carbohydrates", value: "45g" },
  { label: "Fat", value: "8g" },
  { label: "Fiber", value: "6g" },
  { label: "Sugar", value: "8g" },
];

const NutritionAndImage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16">
      <div className="flex-1 flex items-center justify-end w-full mb-4 gap-x-2">
        <Button
          variant={"outline"}
          size={"sm"}
          className="border-gray-500 py-4 text-gray-500"
        >
          <Bookmark className="size-5" /> <span>Save Recipe</span>
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"sm"} className="text-gray-500">
              <Copy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy link</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="w-full flex gap-x-16 bg-foreground">
        <div className="flex-1 pl-10 py-5">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="font-semibold text-black text-sm md:text-base uppercase">
              Nutrition Facts
            </h2>

            <p className="text-sm text-gray-500 font-normal capitalize">
              per serving
            </p>
          </div>

          <div className="mt-5 w-full flex items-center justify-between pb-3 border-b border-gray">
            <h3 className="text-base font-medium text-black">Calories</h3>
            <p className="font-semibold text-base text-black">320</p>
          </div>

          <div className="mt-5 flex flex-col gap-y-4">
            {nutritionArr.map((item, idx) => {
              return (
                <div className="flex justify-between" key={idx}>
                  <span className="text-base text-gray-500">{item.label}</span>
                  <span className="font-semibold text-base text-black">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 h-auto md:min-h-[400px] w-full relative overflow-hidden">
          <Image
            src={
              "https://res.cloudinary.com/dgdoymhtj/image/upload/v1752094857/bueno%20food/photo-1563805042-7684c019e1cb_x90bmi.jpg"
            }
            alt="Chocolate Lava Cake"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionAndImage;
