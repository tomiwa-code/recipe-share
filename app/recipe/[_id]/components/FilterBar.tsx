"use client";
import { useState } from "react";

import { Filter, X } from "lucide-react";
import { Button } from "@/lib/ui/Button";
import { Badge } from "@/lib/ui/Badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/Select";

const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const cuisines = [
    "Italian",
    "Mexican",
    "Asian",
    "Mediterranean",
    "American",
    "Indian",
    "French",
  ];
  const difficulties = ["Easy", "Medium", "Hard"];
  const cookTimes = ["Under 30 min", "30-60 min", "1-2 hours", "2+ hours"];

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="mt-8 py-4">
      <div className="container px-4">
        <div className="flex flex-col space-y-4">
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-sage-600" />
              <span className="text-sm font-medium text-sage-700">
                Filters:
              </span>
            </div>

            <Select onValueChange={addFilter}>
              <SelectTrigger className="w-40 bg-sage-50 border-sage-200">
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={addFilter}>
              <SelectTrigger className="w-40 bg-sage-50 border-sage-200">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={addFilter}>
              <SelectTrigger className="w-40 bg-sage-50 border-sage-200">
                <SelectValue placeholder="Cook Time" />
              </SelectTrigger>
              <SelectContent>
                {cookTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-sage-600">Active filters:</span>
              {activeFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="bg-sage-100 text-sage-700 hover:bg-sage-200"
                >
                  {filter}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 ml-1 hover:bg-sage-300"
                    onClick={() => removeFilter(filter)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="text-sage-600 hover:text-sage-800"
                onClick={clearAllFilters}
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
