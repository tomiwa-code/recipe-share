import {
  Bookmark,
  ChefHat,
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
import Link from "next/link";
import IconUi from "./IconUi";

interface RecipeCardProps {
  idx: number;
}

const RecipeCard = ({ idx }: RecipeCardProps) => {
  return (
    <div className="relative bg-foreground/30 backdrop-blur-sm shadow-sm rounded-2xl min-h-[300px] pb-8">
      <div className="flex w-full flex-col items-center justify-center">
        {/* Recipe Image  */}
        <Link href={"/recipe/1"}>
          <div className="size-44 rounded-full relative shadow-lg -mt-16 hover:-mt-18 transition-all duration-300 ease-in-out">
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
        </Link>

        <div className="w-full flex items-center justify-center mt-4">
          {/* Rating  */}
          <div className="flex-2 flex items-center gap-x-1 justify-center">
            {[0, 1, 2, 3, 4].map((_, idx) => {
              return (
                <Star
                  fill={idx < 4 ? "currentColor" : "none"}
                  key={idx}
                  className="size-5"
                />
              );
            })}
          </div>

          {/* Actions  */}
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

        {/* Chef and Cuisine Info  */}
        <div className="flex items-center gap-x-2 text-sm text-gray-500 capitalize my-2.5">
          <ChefHat size={16} />
          <span>maleek berry</span> • <span>nigerian</span>
        </div>

        <Link href={"/recipe/1"}>
          <div className="flex items-center justify-center w-full flex-col gap-y-3 px-5">
            <h2 className="text-black text-base md:text-lg lg:text-xl font-bold capitalize text-center">
              nigeria Jollof Rice
            </h2>

            <p className="text-sm font-medium -mt-2 text-gray-600 capitalize">
              (african)
            </p>

            <p className="text-sm text-center text-gray-500 w-full">
              A delicious and spicy rice dish from Nigeria, made with tomatoes,
              onions, and a blend of spices.
            </p>
          </div>
        </Link>

        {/* Icon lists  */}
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
