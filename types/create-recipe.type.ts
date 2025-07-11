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
  cookTime: number;
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
