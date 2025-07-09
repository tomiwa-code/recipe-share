import images from "@/constants/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import { cn } from "@/lib/utils";
import React from "react";

const avatarsArr = [
  { fallback: "CN", imgUrl: images.avatar_1 },
  { fallback: "JD", imgUrl: images.avatar_2 },
  { fallback: "TC", imgUrl: images.avatar_3 },
  { fallback: "JS", imgUrl: images.avatar_4 },
  { fallback: "AS", imgUrl: images.avatar_5 },
];

const HeroSection = () => {
  return (
    <div className="w-full h-auto md:h-[550px] flex-col flex items-center justify-center gap-y-5 pt-32">
      <div className="w-full mx-auto max-w-xl">
        <h2 className="font-bold text-8xl text-black font-family-courgette text-center">
          Simple and Tasty <span className="text-red-500">Recipes</span>
        </h2>
      </div>

      <p className="text-gray-500 text-sm md:text-base text-center max-w-lg mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <div className="flex items-center justify-center gap-x-2 -mt-2">
        <div className="flex items-center">
          {avatarsArr.map((avatar, index) => (
            <Avatar
              key={index}
              className={cn(
                "size-8 border-4 border-background",
                index > 0 ? "-ml-4" : ""
              )}
            >
              <AvatarImage src={avatar.imgUrl.src} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <p className="text-gray-500 text-xs md:text-sm">
          <span className="font-semibold text-black">200+</span> people have
          shared their recipes with us!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
