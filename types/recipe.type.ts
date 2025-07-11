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
  creatorBy: RecipeUserType;
  savedBy: string[];
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  nutrition: RecipeNutritionType[];
  ingredients: IngredientsType[];
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
  user: RecipeUserType;
};

export type RecipeUserType = {
  _id: string;
  name: string;
  avatar: string;
  location?: string;
};
