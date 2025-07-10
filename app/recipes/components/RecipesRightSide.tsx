import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import images from "@/constants/images";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

type UserArrType = {
  name: string;
  recipesCount: number;
  avatar: string;
};

const usersArr: UserArrType[] = [
  {
    name: "John Doe",
    recipesCount: 25,
    avatar: images.avatar_1.src,
  },
  {
    name: "Jane Smith",
    recipesCount: 20,
    avatar: images.avatar_2.src,
  },
  {
    name: "Alice Johnson",
    recipesCount: 18,
    avatar: images.avatar_3.src,
  },
  {
    name: "Bob Brown",
    recipesCount: 15,
    avatar: images.avatar_4.src,
  },
  {
    name: "Charlie White",
    recipesCount: 10,
    avatar: images.avatar_5.src,
  },
];

const RecipesRightSide = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div className="rounded-xl bg-foreground/30 backdrop-blur-sm shadow-sm min-h-[350px] px-5 py-8">
        <h2 className="text-lg md:text-xl font-semibold text-black capitalize">
          Top 5 User{" "}
          <span className="text-gray-400 font-normal text-sm">
            (Most post recipes)
          </span>
        </h2>

        <div className="mt-5 flex-col flex gap-y-4">
          {usersArr.map((user) => (
            <div className="flex items-center gap-x-4" key={user.name}>
              <Avatar className={"size-10 bg-gray-300"}>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{"UN"}</AvatarFallback>
              </Avatar>

              <Link
                href={`/user/${user.name.toLowerCase().replaceAll(" ", "-")}`}
                className="flex-1"
              >
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-semibold text-black">
                    {user.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {user.recipesCount} recipes
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl bg-foreground/30 backdrop-blur-sm shadow-sm min-h-[350px] px-5 py-8">
        <h2 className="text-lg md:text-xl font-semibold text-black capitalize">
          Top 5 Recipes{" "}
          <span className="text-gray-400 font-normal text-sm">
            (Most rated recipes)
          </span>
        </h2>

        <div className="mt-5 flex-col flex gap-y-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex items-center gap-x-4" key={index}>
              <div className="size-10 rounded-full relative">
                <Image
                  src={
                    "https://res.cloudinary.com/dgdoymhtj/image/upload/v1752064570/bueno%20food/jollof_tkklgo.webp"
                  }
                  alt="food image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 5 ? true : false}
                />
              </div>

              <Link href={`/recipe/${index + 1}`}>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-sm md:text-base font-medium text-black capitalize">
                    nigeria Jollof Rice
                  </h3>

                  <div className="flex-2 flex gap-x-1">
                    {[0, 1, 2, 3, 4].map((_, idx) => {
                      return (
                        <Star
                          fill={idx < 4 ? "currentColor" : "none"}
                          key={idx}
                          className="size-3"
                        />
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesRightSide;
