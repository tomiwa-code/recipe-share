import React, { useState } from "react";
import { Button } from "@/lib/ui/Button";
import { Input } from "@/lib/ui/Input";
import { Label } from "@/lib/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/Select";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { RecipeFormDataType } from "@/types/create-recipe.type";

interface IngredientsStepProps {
  formData: RecipeFormDataType;
  updateFormData: (updates: Partial<RecipeFormDataType>) => void;
}

const COMMON_UNITS = [
  "cup",
  "cups",
  "tbsp",
  "tsp",
  "oz",
  "lb",
  "g",
  "kg",
  "ml",
  "l",
  "piece",
  "pieces",
  "clove",
  "cloves",
  "to taste",
];

export const IngredientsStep: React.FC<IngredientsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    amount: "",
    unit: "",
  });

  const addIngredient = () => {
    if (newIngredient.name.trim()) {
      const ingredient = {
        id: Date.now().toString(),
        name: newIngredient.name.trim(),
        amount: newIngredient.amount.trim(),
        unit: newIngredient.unit,
      };

      updateFormData({
        ingredients: [...formData.ingredients, ingredient],
      });

      setNewIngredient({ name: "", amount: "", unit: "" });
    }
  };

  const removeIngredient = (id: string) => {
    updateFormData({
      ingredients: formData.ingredients.filter((ing) => ing.id !== id),
    });
  };

  const updateIngredient = (id: string, field: string, value: string) => {
    updateFormData({
      ingredients: formData.ingredients.map((ing) =>
        ing.id === id ? { ...ing, [field]: value } : ing
      ),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Add Ingredients</h3>

        {/* Add new ingredient form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg bg-muted/20">
          <div className="md:col-span-6">
            <Label htmlFor="ingredient-name">Ingredient Name</Label>
            <Input
              id="ingredient-name"
              placeholder="e.g., All-purpose flour"
              value={newIngredient.name}
              onChange={(e) =>
                setNewIngredient({ ...newIngredient, name: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="md:col-span-3">
            <Label htmlFor="ingredient-amount">Amount</Label>
            <Input
              id="ingredient-amount"
              placeholder="e.g., 2"
              value={newIngredient.amount}
              onChange={(e) =>
                setNewIngredient({ ...newIngredient, amount: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="ingredient-unit">Unit</Label>
            <Select
              value={newIngredient.unit}
              onValueChange={(value) =>
                setNewIngredient({ ...newIngredient, unit: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                {COMMON_UNITS.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-1 flex items-end">
            <Button
              onClick={addIngredient}
              disabled={!newIngredient.name.trim()}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Ingredients List */}
      {formData.ingredients.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Ingredients ({formData.ingredients.length})
          </h3>

          <div className="space-y-2">
            {formData.ingredients.map((ingredient, index) => (
              <div
                key={ingredient.id}
                className="flex items-center gap-4 p-3 border rounded-lg bg-card"
              >
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />

                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-6">
                    <Input
                      value={ingredient.name}
                      onChange={(e) =>
                        updateIngredient(ingredient.id, "name", e.target.value)
                      }
                      placeholder="Ingredient name"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <Input
                      value={ingredient.amount}
                      onChange={(e) =>
                        updateIngredient(
                          ingredient.id,
                          "amount",
                          e.target.value
                        )
                      }
                      placeholder="Amount"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Select
                      value={ingredient.unit}
                      onValueChange={(value) =>
                        updateIngredient(ingredient.id, "unit", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMMON_UNITS.map((unit) => (
                          <SelectItem key={unit} value={unit}>
                            {unit}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeIngredient(ingredient.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {formData.ingredients.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>
            No ingredients added yet. Start by adding your first ingredient
            above.
          </p>
        </div>
      )}
    </div>
  );
};
