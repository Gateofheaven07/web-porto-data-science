"use client";

import { useState, useMemo } from "react";
import { ProjectFilter } from "@/components/project-filter";
import { ProjectCard } from "@/components/project-card";
import projects from "@/lib/projects.json";
import type { Project } from "@/lib/types";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return (projects as Project[]).filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        !selectedCategory || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleFilterChange = (query: string, category: string | null) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          A comprehensive collection of machine learning and data science projects
          showcasing various techniques, tools, and applications.
        </p>
      </div>

      <ProjectFilter onFilterChange={handleFilterChange} />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-slate-600 mb-4">
            No projects found matching your filters.
          </p>
          <button
            onClick={() => handleFilterChange("", null)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className="mt-12 text-center text-slate-600">
        <p>
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </div>
  );
}
