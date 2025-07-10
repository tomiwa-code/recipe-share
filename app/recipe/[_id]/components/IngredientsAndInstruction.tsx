import React from "react";

const ingredientsArr = [
  { id: 1, name: "Flour", quantity: "2 cups" },
  { id: 2, name: "Sugar", quantity: "1 cup" },
  { id: 3, name: "Butter", quantity: "1/2 cup" },
  { id: 4, name: "Eggs", quantity: "2 large" },
  { id: 5, name: "Milk", quantity: "1 cup" },
];

const instructionsArr = [
  { id: 1, step: "Preheat the oven to 350°F (175°C)." },
  { id: 2, step: "In a bowl, mix flour and sugar." },
  { id: 3, step: "Add butter and eggs, then mix well." },
  { id: 4, step: "Pour in milk and stir until smooth." },
  { id: 5, step: "Pour the batter into a greased baking dish." },
  { id: 6, step: "Bake for 30-35 minutes or until golden brown." },
  { id: 7, step: "Let it cool before serving." },
];

const IngredientsAndInstruction = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-8">
        {/* Ingredients section */}
        <div className="flex-1 px-8 py-6 bg-foreground/30 rounded-xl backdrop-blur-sm shadow-sm">
          <h2 className="font-semibold text-black text-sm md:text-base uppercase">
            ingredients
          </h2>

          <div className="mt-5 flex flex-col justify-between gap-y-4">
            {ingredientsArr.map((item) => (
              <div className="flex justify-between" key={item.id}>
                <span className="text-base text-gray-500">{item.name}</span>
                <span className="font-medium text-base text-black">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions section */}
        <div className="flex-1 px-8 py-6 bg-foreground/30 rounded-xl backdrop-blur-sm shadow-sm">
          <h2 className="font-semibold text-black text-sm md:text-base uppercase">
            Instructions
          </h2>

          <div className="mt-5 flex flex-col gap-y-4">
            {instructionsArr.map((item) => (
              <div className="flex items-center gap-x-4" key={item.id}>
                <div className="flex items-center justify-center size-8 bg-red-400 text-white rounded-full">
                  <span>{item.id}</span>
                </div>
                <span className="flex-1 text-sm md:text-base text-gray-500">
                  {item.step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsAndInstruction;
