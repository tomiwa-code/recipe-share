"use client";
import React from "react";

import { parseAsStringLiteral, useQueryState } from "nuqs";
import UserHeroSection from "./UserHeroSection";
import { UserType } from "@/types/user.type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/ui/Tabs";
import { BookOpen, ChefHat, Heart } from "lucide-react";
import Overview from "./Overview";
import UserRecipes from "./UserRecipes";
import Saved from "./Saved";
import { cn } from "@/lib/utils";

interface UserProfileProps {
  userData: UserType;
}

const tabs = ["overview", "saved", "recipes"] as const;

const UserProfile = ({ userData }: UserProfileProps) => {
  // Using nuqs for query state management
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringLiteral(tabs).withDefault("recipes")
  );

  const isUser = true;

  // Change tab if user is not signed in
  React.useEffect(() => {
    if (!isUser && tab === "saved") {
      setTab("recipes");
    }
  }, [isUser]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-x-12 gap-y-8 justify-between">
      <div className="max-w-5xl w-full bg-foreground min-h-screen">
        <UserHeroSection userData={userData} />

        <Tabs
          value={tab}
          onValueChange={(value) => setTab(value as typeof tab)}
          className="w-full"
        >
          {/* Tabs List */}
          <TabsList
            className={cn(
              "grid w-full grid-cols-2 mb-8 border-b border-gray-300 px-4 h-12",
              isUser && "grid-cols-3"
            )}
          >
            <TabsTrigger
              value="overview"
              className="gap-2 mt-2 text-xs md:text-sm"
            >
              <BookOpen className="h-4 w-4 hidden md:block" />
              Overview
            </TabsTrigger>

            <TabsTrigger
              value="recipes"
              className={"gap-2 mt-2 text-xs md:text-sm"}
            >
              <ChefHat className="h-4 w-4 hidden md:block" />
              {isUser && "My"} Recipes ({userData.stats.recipesShared})
            </TabsTrigger>

            {/* This tab is only available for signed in user  */}
            {isUser && (
              <TabsTrigger
                value="saved"
                className="gap-2 mt-2 text-xs md:text-sm"
              >
                <Heart className="h-4 w-4 hidden md:block" />
                Saved <span className="hidden md:block">Recipes</span> (
                {userData.stats.recipeSaved})
              </TabsTrigger>
            )}
          </TabsList>

          {/* Tabs Content */}
          <TabsContent value="overview">
            <Overview />
          </TabsContent>

          <TabsContent value="recipes">
            <UserRecipes userId={userData._id} />
          </TabsContent>

          {/* Only signed in user can access saved tab content  */}
          {isUser && (
            <TabsContent value="saved">
              <Saved userId={userData._id} />
            </TabsContent>
          )}
        </Tabs>
      </div>

      <div className="w-full md:flex-1 h-[300px] md:h-[400px] flex flex-col items-center justify-center gap-y-2 text-center rounded-xl bg-foreground/30 backdrop-blur-sm py-5 px-4">
        <h2 className="text-2xl font-semibold text-black">Coming Soon</h2>
        <p className="text-sm text-gray-500 max-w-xs w-full">
          This section is under development and will be available soon.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
