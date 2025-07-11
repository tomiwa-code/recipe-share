import React, { useRef } from "react";
import { Button } from "@/lib/ui/Button";
import { Input } from "@/lib/ui/Input";
import { Textarea } from "@/lib/ui/Textarea";
import { Label } from "@/lib/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/Select";
import { Upload, X } from "lucide-react";
import { RecipeFormDataType } from "@/types/create-recipe.type";

interface BasicInfoStepProps {
  formData: RecipeFormDataType;
  updateFormData: (updates: Partial<RecipeFormDataType>) => void;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  formData,
  updateFormData,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateFormData({
          image: file,
          imagePreview: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    updateFormData({
      image: null,
      imagePreview: "",
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Image Upload */}
      <div className="space-y-2">
        <Label>Recipe Image</Label>
        <div className="flex flex-col items-center">
          {formData.imagePreview ? (
            <div className="relative">
              <img
                src={formData.imagePreview}
                alt="Recipe preview"
                className="w-full max-w-md h-48 object-cover rounded-lg"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors w-full max-w-md"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                Click to upload recipe image
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG up to 10MB
              </p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title *</Label>
            <Input
              id="title"
              placeholder="Enter recipe title"
              value={formData.title}
              onChange={(e) => updateFormData({ title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe your recipe..."
              rows={4}
              value={formData.description}
              onChange={(e) => updateFormData({ description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cuisine">Cuisine Type *</Label>
            <Select
              value={formData.cuisine}
              onValueChange={(value) => updateFormData({ cuisine: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select cuisine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
                <SelectItem value="mexican">Mexican</SelectItem>
                <SelectItem value="indian">Indian</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="thai">Thai</SelectItem>
                <SelectItem value="american">American</SelectItem>
                <SelectItem value="mediterranean">Mediterranean</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty Level *</Label>
            <Select
              value={formData.difficulty}
              onValueChange={(value) => updateFormData({ difficulty: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prep-time">Prep Time (min)</Label>
              <Input
                id="prep-time"
                type="number"
                min="1"
                placeholder="15"
                value={formData.prepTime || ""}
                onChange={(e) =>
                  updateFormData({ prepTime: parseInt(e.target.value) || 0 })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cook-time">Cook Time (min)</Label>
              <Input
                id="cook-time"
                type="number"
                min="1"
                placeholder="30"
                value={formData.cookTime || ""}
                onChange={(e) =>
                  updateFormData({ cookTime: parseInt(e.target.value) || 0 })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="servings">Servings</Label>
            <Input
              id="servings"
              type="number"
              min="1"
              placeholder="4"
              value={formData.servings}
              onChange={(e) =>
                updateFormData({ servings: parseInt(e.target.value) || 1 })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
