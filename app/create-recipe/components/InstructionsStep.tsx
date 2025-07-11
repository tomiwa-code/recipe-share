import React, { useState } from "react";
import { Button } from "@/lib/ui/Button";
import { Label } from "@/lib/ui/Label";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { RecipeFormDataType } from "@/types/create-recipe.type";
import { Textarea } from "@/lib/ui/Textarea";

interface InstructionsStepProps {
  formData: RecipeFormDataType;
  updateFormData: (updates: Partial<RecipeFormDataType>) => void;
}

export const InstructionsStep: React.FC<InstructionsStepProps> = ({
  formData,
  updateFormData,
}) => {
  const [newInstruction, setNewInstruction] = useState("");

  const addInstruction = () => {
    if (newInstruction.trim()) {
      const instruction = {
        id: Date.now().toString(),
        step: formData.instructions.length + 1,
        instruction: newInstruction.trim(),
      };

      updateFormData({
        instructions: [...formData.instructions, instruction],
      });

      setNewInstruction("");
    }
  };

  const removeInstruction = (id: string) => {
    const filteredInstructions = formData.instructions.filter(
      (inst) => inst.id !== id
    );
    // Renumber the remaining instructions
    const renumberedInstructions = filteredInstructions.map((inst, index) => ({
      ...inst,
      step: index + 1,
    }));

    updateFormData({
      instructions: renumberedInstructions,
    });
  };

  const updateInstruction = (id: string, value: string) => {
    updateFormData({
      instructions: formData.instructions.map((inst) =>
        inst.id === id ? { ...inst, instruction: value } : inst
      ),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      addInstruction();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Add Cooking Instructions</h3>

        {/* Add new instruction form */}
        <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
          <div>
            <Label htmlFor="new-instruction">
              Step {formData.instructions.length + 1}
            </Label>
            <Textarea
              id="new-instruction"
              placeholder="Describe this cooking step in detail..."
              rows={3}
              value={newInstruction}
              onChange={(e) => setNewInstruction(e.target.value)}
              onKeyUp={handleKeyPress}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Press Ctrl+Enter to add step
            </p>
          </div>

          <Button onClick={addInstruction} disabled={!newInstruction.trim()}>
            <Plus className="w-4 h-4 mr-2" />
            Add Step
          </Button>
        </div>
      </div>

      {/* Instructions List */}
      {formData.instructions.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Instructions ({formData.instructions.length} steps)
          </h3>

          <div className="space-y-4">
            {formData.instructions.map((instruction, index) => (
              <div
                key={instruction.id}
                className="flex gap-4 p-4 border rounded-lg bg-card"
              >
                <div className="flex items-start gap-3">
                  <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab mt-3" />
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0 mt-2">
                    {instruction.step}
                  </div>
                </div>

                <div className="flex-1">
                  <Textarea
                    value={instruction.instruction}
                    onChange={(e) =>
                      updateInstruction(instruction.id, e.target.value)
                    }
                    placeholder="Cooking instruction..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeInstruction(instruction.id)}
                  className="flex-shrink-0 mt-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {formData.instructions.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>
            No instructions added yet. Start by adding your first cooking step
            above.
          </p>
        </div>
      )}
    </div>
  );
};
