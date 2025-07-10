"use client";
import { useCheckPage } from "@/hooks/useCheckPage";
import { ChefHat } from "lucide-react";
import React from "react";

const signUpBenefits = [
  "Save your favorite recipes for quick access",
  "Create and share your own recipes with the community",
  "Access exclusive content and premium features",
  "Connect with a community of food lovers and chefs",
  "Receive personalized recipe recommendations based on your tastes",
  "Get early access to new features and cooking challenges",
  "Sync your recipe collections across all devices",
];

const signInBenefits = [
  "Explore over 200+ handpicked recipes",
  "Continue where you left off with your saved recipes",
  "Manage your shared recipes and cooking notes",
  "Unlock your personalized dashboard and cooking stats",
  "Join live cooking events and webinars",
  "Earn badges and rewards for your culinary creations",
];

const AuthInfo = () => {
  const { isSignUpPage } = useCheckPage();

  //   Return benefits based on the page type
  const benefits = React.useMemo(() => {
    return isSignUpPage ? signUpBenefits : signInBenefits;
  }, [isSignUpPage]);

  return (
    <div className="w-full max-w-lg">
      <div className="flex flex-col gap-y-1">
        <h2 className="text-lg md:text-2xl text-black font-semibold font-family-courgette capitalize">
          {isSignUpPage ? "create account" : "Sign in to get started"}
        </h2>

        <p className="text-lg text-gray-500 font-medium">What you will get?</p>
      </div>

      <div className="mt-5 flex flex-col gap-y-4">
        {benefits.map((benefit, idx) => {
          return (
            <div className="flex items-center gap-x-3" key={idx}>
              <ChefHat className="size-5 text-gray-400" />

              <p className="text-base text-gray-500">{benefit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthInfo;
