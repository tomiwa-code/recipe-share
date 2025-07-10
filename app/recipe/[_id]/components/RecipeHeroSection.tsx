import IconUi from "@/lib/ui/IconUi";
import {
  ChefHat,
  Clock,
  Dumbbell,
  MessageSquareMore,
  Star,
  Target,
  UsersRound,
} from "lucide-react";
import React from "react";

// List of recipe hero section icons and their text
const IconArr = [
  {
    icon: <Clock className="size-5 text-gray-500" />,
    text: "20 min.",
  },
  {
    icon: <Dumbbell className="size-5 text-gray-500" />,
    text: "Easy",
  },
  {
    icon: <UsersRound className="size-5 text-gray-500" />,
    text: "2 servings",
  },
  {
    icon: <Star className="size-5 text-gray-500" />,
    text: `4.2 Ratings`,
  },
  {
    icon: <Target className="size-5 text-gray-500" />,
    text: `631 Reviews`,
  },
  {
    icon: <MessageSquareMore className="size-5 text-gray-500" />,
    text: `23k Comments`,
  },
];

const RecipeHeroSection = () => {
  return (
    <div className="md:pt-12 w-full flex-col items-center justify-center">
      <div className="w-full max-w-xl relative mx-auto gap-y-4 flex-col flex items-center justify-center">
        <h2 className="text-3xl font-bold text-center capitalize">
          Chocolate Lava Cake
        </h2>

        <p className="text-sm text-gray-500 text-center w-full">
          Decadent individual chocolate cakes with molten centers. Perfect for
          date night.
        </p>

        {/* Dynamic rendering of icons */}
        <div className="flex items-center flex-wrap gap-y-3 justify-center gap-x-8">
          {IconArr.map((item, idx) => {
            return (
              <IconUi
                key={idx}
                className="flex-row gap-x-2"
                icon={item.icon}
                text={item.text}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-x-2 text-sm text-gray-500 capitalize">
          <span className="normal-case">by</span>
          <ChefHat size={16} />
          <span>maleek berry</span> • <span>nigerian</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeroSection;
