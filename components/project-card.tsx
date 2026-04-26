"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="h-full rounded-2xl border-2 border-foreground overflow-hidden hover:-translate-y-2 transition-all hover:shadow-pop-hover group bg-white shadow-pop flex flex-col">
        <div className="relative h-56 w-full overflow-hidden bg-white border-b-2 border-foreground">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/20 text-foreground border-2 border-foreground font-bold hover:bg-primary/30">{project.categoryLabel}</Badge>
            {project.featured && <Badge className="bg-tertiary text-foreground border-2 border-foreground font-bold hover:bg-tertiary">Featured</Badge>}
          </div>

          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors font-heading leading-tight">
            {project.title}
          </h3>

          <p className="text-base text-foreground font-medium mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-bold px-3 py-1 bg-secondary text-foreground border-2 border-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-bold px-3 py-1 bg-white text-foreground border-2 border-foreground rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="text-sm font-bold text-foreground/70">
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
