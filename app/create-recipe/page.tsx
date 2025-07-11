import React from "react";
import CreateRecipeWrapper from "./components/CreateRecipeWrapper";

const CreateRecipePage = () => {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center w-full ">
          <p>...Loading content</p>
        </div>
      }
    >
      <CreateRecipeWrapper />
    </React.Suspense>
  );
};

export default CreateRecipePage;
