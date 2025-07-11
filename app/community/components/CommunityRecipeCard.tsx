"use client";
import React from "react";

import { ChefHat, Clock, Copy, Dumbbell, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../lib/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../lib/ui/Tooltip";
import Link from "next/link";
import IconUi from "../../../lib/ui/IconUi";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import { cn, getInitials } from "../../../lib/utils";
import images from "@/constants/images";
import RecipeCardFooter from "./RecipeCardFooter";

interface CommunityRecipeCardProps {
  idx: number;
  className?: string;
}

const CommunityRecipeCard = ({ idx, className }: CommunityRecipeCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-foreground/30 backdrop-blur-sm shadow-sm rounded-2xl py-5 px-6",
        className
      )}
    >
      <div className="flex gap-x-6">
        {/* Recipe Image  */}
        <Link href={"/community/1"}>
          <div className="size-44 rounded-full relative shadow-lg transition-all duration-300 ease-in-out">
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

        <div className="w-full flex flex-col gap-y-4">
          <div className="flex items-center justify-between w-full">
            {/* Recipe Title and Rating  */}
            <div className="flex flex-col gap-y-2">
              <h2 className="text-black text-base md:text-lg lg:text-xl font-bold capitalize text-center">
                nigeria Jollof Rice
              </h2>

              <div className="flex-2 flex gap-x-1">
                {[0, 1, 2, 3, 4].map((_, idx) => {
                  return (
                    <Star
                      fill={idx < 4 ? "currentColor" : "none"}
                      key={idx}
                      className="size-4"
                    />
                  );
                })}
              </div>
            </div>

            {/* Copy Link  */}
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
          </div>

          {/* Recipe Description  */}
          <Link href={"/community/1"}>
            <p className="text-sm text-gray-500 w-full">
              A delicious and spicy rice dish from Nigeria, made with tomatoes,
              onions, and a blend of spices.
            </p>
          </Link>

          {/* Chef Info  */}
          <div className="flex items-center gap-x-2">
            <Avatar className={"size-8 bg-gray-200"}>
              <AvatarImage src={images.avatar_3.src} />
              <AvatarFallback className="uppercase">
                {getInitials("maleek berry")}
              </AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-x-2 text-sm text-gray-500 capitalize">
              <ChefHat size={16} />
              <span>maleek berry</span> • <span>nigerian</span>
            </div>
          </div>

          {/* Recipe Info  */}
          <div className="flex items-center gap-x-4 w-full">
            <IconUi
              className="flex-row gap-x-3"
              icon={<Clock className="size-5 text-gray-500" />}
              text="20 min."
            />
            <IconUi
              className="flex-row gap-x-3"
              icon={<Dumbbell className="size-5 text-gray-500" />}
              text="Easy"
            />
            <IconUi
              className="flex-row gap-x-3"
              icon={<UsersRound className="size-5 text-gray-500" />}
              text="2 servings"
            />
          </div>

          {/* Actions  */}
          <RecipeCardFooter recipeId={"1"} />
        </div>
      </div>
    </div>
  );
};

export default CommunityRecipeCard;
