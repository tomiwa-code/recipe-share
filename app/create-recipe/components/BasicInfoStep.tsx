import React, { useRef } from "react";
import { Button } from "@/lib/ui/Button";
import { Input } from "@/lib/ui/Input";
import { Textarea } from "@/lib/ui/Textarea";
import { Label } from "@/lib/ui/Label";
import { Upload, X } from "lucide-react";
import { RecipeFormDataType } from "@/types/recipe.type";
import CustomSelect from "./CustomSelect";

interface BasicInfoStepProps {
  formData: RecipeFormDataType;
  updateFormData: (updates: Partial<RecipeFormDataType>) => void;
}

const labelStyle = "capitalize text-gray-500 text-sm";
const inputStyles = "capitalize rounded-md border-gray-600 h-12";
const difficultyOptions = ["easy", "medium", "hard"];
const cuisinesArr = [
  "african",
  "italian",
  "chinese",
  "mexican",
  "indian",
  "french",
  "japanese",
  "thai",
  "american",
  "mediterranean",
  "other",
].sort((a, b) => a.localeCompare(b));

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
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
                className="absolute top-2 right-2 bg-red-500"
                onClick={removeImage}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-gray-500/30 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors w-full max-w-md"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">Click to upload recipe image</p>
              <p className="text-xs text-gray-500">WEBP, PNG, JPG up to 10MB</p>
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
          <div className="space-y-1">
            <Label htmlFor="title" className={`${labelStyle}`}>
              Recipe Title *
            </Label>
            <Input
              id="title"
              placeholder="Chocolate lava cake"
              value={formData.title}
              className={`${inputStyles}`}
              onChange={(e) => updateFormData({ title: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <Label className={`${labelStyle}`} htmlFor="description">
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your recipe..."
              rows={4}
              value={formData.description}
              className="border-gray-600 min-h-[133px] resize-none"
              onChange={(e) => updateFormData({ description: e.target.value })}
            />
          </div>

          <div className="space-y-1">
            <Label className={`${labelStyle}`} htmlFor="cuisine">
              Cuisine Type *
            </Label>
            <CustomSelect
              selectItems={cuisinesArr}
              value={formData.cuisine}
              onChange={(value) => updateFormData({ cuisine: value })}
              defaultValue="Select cuisine"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className={`${labelStyle}`} htmlFor="difficulty">
              Difficulty Level *
            </Label>
            <CustomSelect
              selectItems={difficultyOptions}
              value={formData.difficulty}
              onChange={(value) => updateFormData({ difficulty: value })}
              defaultValue="Select difficulty"
            />
          </div>

          <div className="space-y-1">
            <Label className={`${labelStyle}`} htmlFor="prep-time">
              Prep Time (min)
            </Label>
            <Input
              id="prep-time"
              type="number"
              min="1"
              placeholder="15"
              value={formData.prepTime || ""}
              className={`${inputStyles}`}
              onChange={(e) =>
                updateFormData({ prepTime: parseInt(e.target.value) || 0 })
              }
            />
          </div>

          <div className="space-y-2">
            <Label className={`${labelStyle}`} htmlFor="servings">
              Servings
            </Label>
            <Input
              id="servings"
              type="number"
              min="1"
              placeholder="4"
              value={formData.servings}
              className={`${inputStyles}`}
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

export default BasicInfoStep;
