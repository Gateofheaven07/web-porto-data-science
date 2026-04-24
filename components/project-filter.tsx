"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CATEGORIES = [
  { id: "machine-learning", label: "Machine Learning" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "nlp", label: "NLP" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "time-series", label: "Time Series" },
];

interface ProjectFilterProps {
  onFilterChange: (query: string, category: string | null) => void;
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onFilterChange(query, selectedCategory);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    onFilterChange(searchQuery, category);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    onFilterChange("", null);
  };

  return (
    <div className="mb-12 space-y-6">
      <div>
        <Input
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full h-14 text-lg border-4 border-foreground shadow-pop rounded-2xl focus-visible:ring-0 focus-visible:border-accent transition-colors bg-white font-medium"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "secondary"}
            size="lg"
            className={selectedCategory === category.id
              ? "border-2 border-foreground shadow-pop-hover bg-foreground text-white rounded-xl font-bold translate-y-1"
              : "border-2 border-foreground shadow-pop bg-white text-foreground hover:-translate-y-1 hover:shadow-pop-hover rounded-xl font-bold transition-all"}
            onClick={() => handleCategoryChange(
              selectedCategory === category.id ? null : category.id
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {(searchQuery || selectedCategory) && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="text-foreground border-2 border-foreground shadow-soft-pop rounded-xl bg-secondary font-bold hover:-translate-y-1 hover:shadow-pop transition-all hover:bg-secondary/80"
        >
          <X className="w-5 h-5 mr-2" strokeWidth={3} />
          Clear filters
        </Button>
      )}
    </div>
  );
}
