export type RecipeCardType = {
  _id: string;
  name: string;
  desc: string;
  rating: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  serving: number;
  reviews: number;
  comments: number;
  creatorBy: RecipeCardType;
  savedBy: string[];
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  nutrition: RecipeNutritionType[];
  ingredients: IngredientsType[];
};

export type RecipeCreatorType = {
  name: string;
  location: string;
};

export type RecipeNutritionType = {
  label: string;
  value: string;
};

export type IngredientsType = {
  id: number;
  name: string;
  quantity: string;
};

export type InstructionsType = {
  id: number;
  step: string;
};

export type ReviewType = {
  _id: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
};
