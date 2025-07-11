import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import React from "react";
import RecipeCardWrapper from "./RecipeCardWrapper";

// TODO:: Responsiveness - Make the component responsive

const CommunityPageWrapper = () => {
  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <BackgroundEffect />

      <div className="max-w-7xl mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10 pt-28 md:pt-32">
        <div className="w-full flex flex-col lg:flex-row gap-x-12 gap-y-8 justify-between">
          <div className="flex-2 w-full min-h-screen">
            <React.Suspense fallback={<div>Loading...</div>}>
              <RecipeCardWrapper />
            </React.Suspense>
          </div>

          <div className="h-full md:flex-1">
            <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center gap-y-2 text-center rounded-xl bg-foreground/30 backdrop-blur-sm py-5 px-4">
              <h2 className="text-2xl font-semibold text-black">Coming Soon</h2>
              <p className="text-sm text-gray-500 max-w-xs w-full">
                This section is under development and will be available soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityPageWrapper;
