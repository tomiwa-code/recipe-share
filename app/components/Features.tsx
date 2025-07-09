import icons from "@/constants/icons";
import Image from "next/image";
import React from "react";

type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

const featuresArr: FeatureType[] = [
  {
    title: "Quality Food",
    description:
      "We ensure that all recipes shared on our platform are of the highest quality, using fresh and healthy ingredients to create delicious meals.",
    icon: icons.qualityFood.src,
  },
  {
    title: "Cook Like a Chef",
    description:
      "Our platform provides you with all the tools and resources you need to cook like a professional chef, including step-by-step instructions and expert tips.",
    icon: icons.chef.src,
  },
  {
    title: "Ingredients",
    description:
      "Our platform allows users to easily manage and share their ingredients, making it simple to create and modify recipes on the fly.",
    icon: icons.ingredients.src,
  },
  {
    title: "Easy Recipes",
    description:
      "Our platform offers a wide variety of easy-to-follow recipes that anyone can make, regardless of their cooking skill level.",
    icon: icons.easyRecipe.src,
  },
  {
    title: "Serves Hot",
    description:
      "We ensure that all recipes shared on our platform are served hot and fresh, providing you with the best possible dining experience.",
    icon: icons.servesHot.src,
  },
];

const Features = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex gap-y-1 flex-col items-center justify-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          Features
        </p>
        <h2 className="text-2xl w-full max-w-xl text-center mx-auto capitalize text-black font-semibold">
          Discover the amazing features of our recipe sharing platform.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-12 w-full mt-10 px-20">
        {featuresArr.map((feature, idx) => {
          return (
            <div className="flex gap-x-10" key={idx}>
              <div className="relative size-32">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  fetchPriority="low"
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-2xl font-semibold text-black capitalize">
                  {feature.title}
                </h2>

                <p className="text-gray-500 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
