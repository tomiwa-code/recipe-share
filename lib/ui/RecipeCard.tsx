import {
  Bookmark,
  Clock,
  Copy,
  Dumbbell,
  Star,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

interface RecipeCardProps {
  idx: number;
}

const RecipeCard = ({ idx }: RecipeCardProps) => {
  return (
    <div className="relative bg-foreground/30 backdrop-blur-sm shadow-sm rounded-2xl min-h-[300px] pb-8">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="size-44 rounded-full relative shadow-lg -mt-16">
          <Image
            src={
              "https://res.cloudinary.com/dgdoymhtj/image/upload/v1752064570/bueno%20food/jollof_tkklgo.webp"
            }
            alt="food image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={idx < 5 ? true : false}
          />
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <div className="flex-2 flex items-center gap-x-1 justify-center">
            {[0, 1, 2, 3, 4].map((_, idx) => {
              return (
                <Star
                  fill={idx < 4 ? "currentColor" : "none"}
                  key={idx}
                  className=" size-5"
                />
              );
            })}
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <Copy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy link</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <Bookmark className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save recipe</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 w-full flex-col gap-y-3 px-5">
          <h2 className="text-black text-base md:text-lg lg:text-xl font-bold capitalize text-center">
            nigeria Jollof Rice
          </h2>

          <p className="text-sm text-center text-gray-500 w-full">
            A delicious and spicy rice dish from Nigeria, made with tomatoes,
            onions, and a blend of spices.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between px-8 w-full">
          <IconUi
            icon={<Clock className="size-5 text-gray-500" />}
            text="20 min."
          />
          <IconUi
            icon={<Dumbbell className="size-5 text-gray-500" />}
            text="Easy"
          />
          <IconUi
            icon={<UsersRound className="size-5 text-gray-500" />}
            text="2 servings"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

const IconUi = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center text-gray-500">
      {icon}
      <p className="font-medium text-black/80 text-sm">{text}</p>
    </div>
  );
};
