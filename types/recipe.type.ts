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
  cuisine: string;
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
  title?: string;
};

export type RecipeUserType = {
  _id: string;
  name: string;
  avatar: string;
  location?: string;
};

export type ReviewStats = Record<number, number>;

export type StepsType = {
  id: number;
  title: string;
  description: string;
};

export interface RecipeFormDataType {
  title: string;
  description: string;
  cuisine: string;
  difficulty: string;
  prepTime: number;
  servings: number;
  image: File | null;
  imagePreview: string;
  ingredients: Array<{
    id: string;
    name: string;
    amount: string;
    unit: string;
  }>;
  instructions: Array<{
    id: string;
    step: number;
    instruction: string;
  }>;
  tags: string[];
}
