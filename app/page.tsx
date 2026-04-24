import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import projects from "@/lib/projects.json";
import { Project } from "@/lib/types";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects as unknown as Project[]} />
      
      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-b-4 border-foreground relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -z-10 translate-x-1/2 -translate-y-1/2 border-4 border-foreground mix-blend-multiply opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 p-10 sm:p-16 bg-white rounded-3xl border-4 border-foreground shadow-pop">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-foreground mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl text-foreground font-medium mb-10 max-w-2xl mx-auto">
            Let's collaborate on your next data science or machine learning project.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-10 py-4 bg-tertiary text-foreground font-bold border-2 border-foreground shadow-pop rounded-xl hover:-translate-y-1 hover:shadow-pop-hover transition-all text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
