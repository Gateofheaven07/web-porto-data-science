"use client";

import { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-background border-b-4 border-foreground relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground font-medium max-w-2xl bg-secondary/30 p-5 rounded-2xl border-2 border-foreground shadow-soft-pop">
            A selection of my recent machine learning and data science projects
            showcasing real-world applications and advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/projects">
            <Button size="lg" className="gap-2 text-lg px-8 border-2 border-foreground shadow-pop hover:-translate-y-1 hover:shadow-pop-hover transition-all bg-accent text-white group">
              View All Projects
              <span className="bg-white text-accent rounded-full p-0.5 inline-flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-accent" strokeWidth={3} />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
