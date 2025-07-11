import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/Select";
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  value: string;
  onChange: (e: string) => void;
  selectItems: string[];
  defaultValue: string;
  className?: string;
}

const CustomSelect = ({
  value,
  onChange,
  selectItems,
  defaultValue,
  className,
}: CustomSelectProps) => {
  return (
    <Select value={value} onValueChange={(e) => onChange(e)}>
      <SelectTrigger
        className={cn("bg-white border-gray-600 capitalize", className)}
      >
        <SelectValue placeholder={defaultValue} />
      </SelectTrigger>
      <SelectContent className="bg-white border-gray-600 border-none">
        {selectItems.map((option) => {
          return (
            <SelectItem
              key={option}
              value={option}
              className={cn(
                "hover:bg-gray-100 capitalize cursor-pointer duration-300 transition-all",
                {
                  "bg-red-400 text-white": value === option,
                }
              )}
            >
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
