import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Download } from "lucide-react";
import projectsData from "@/lib/projects.json";
import type { Project } from "@/lib/types";

const projects = projectsData as Project[];

function getDownloadFileName(url: string) {
  const pathname = url.startsWith("http") ? new URL(url).pathname : url;
  return pathname.split("/").pop() || undefined;
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Data Science Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter(
      (p) => p.category === project.category && p.id !== project.id
    )
    .slice(0, 3);

  return (
    <div>
      {/* Hero Image */}
      <div className="w-full border-b-2 border-foreground bg-slate-50 py-8 lg:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-foreground shadow-pop overflow-hidden bg-white">
            <Image
              src={project.image}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{project.categoryLabel}</Badge>
            {project.featured && <Badge className="bg-blue-600">Featured</Badge>}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-slate-600 mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
            )}
            {project.notebook && (
              <a href={project.notebook} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Notebook
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </Button>
              </a>
            )}
            {project.datasetDownloadUrl && (
              <a href={project.datasetDownloadUrl} download={getDownloadFileName(project.datasetDownloadUrl)}>
                <Button variant="outline" className="gap-2 border-2 border-foreground shadow-pop hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <Download className="w-4 h-4" />
                  Download Dataset
                </Button>
              </a>
            )}
            {project.resultDownloadUrl && (
              <a href={project.resultDownloadUrl} download={getDownloadFileName(project.resultDownloadUrl)}>
                <Button variant="outline" className="gap-2 border-2 border-foreground shadow-pop hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <Download className="w-4 h-4" />
                  Download Result
                </Button>
              </a>
            )}
          </div>

          <div className="text-sm text-slate-500">
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="col-span-3 lg:col-span-2 space-y-8">
            {/* Problem Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Problem</h2>
              <p className="text-slate-600 leading-relaxed">{project.problem}</p>
            </section>

            {/* Approach Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Approach</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{project.approach}</p>
              
              {project.methodologies && project.methodologies.length > 0 && (
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Methodologies:</h3>
                  <ul className="space-y-2">
                    {project.methodologies.map((methodology, idx) => (
                      <li key={idx} className="text-slate-600 flex gap-3">
                        <span className="text-blue-600 font-semibold">•</span>
                        {methodology}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Results Section */}
            {project.results && project.results.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Results</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                    >
                      <p className="text-sm text-slate-600 mb-1">{result.metric}</p>
                      <p className="text-2xl font-bold text-blue-600">{result.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Findings Section */}
            {project.keyFindings && project.keyFindings.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Key Findings
                </h2>
                <ul className="space-y-3">
                  {project.keyFindings.map((finding, idx) => (
                    <li key={idx} className="text-slate-600 flex gap-3">
                      <span className="text-blue-600 font-semibold mt-1">→</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Technologies */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              {project.tools && project.tools.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Tools Used</h3>
                  <div className="space-y-2">
                    {project.tools.map((tool) => (
                      <p key={tool} className="text-sm text-slate-600">
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Dataset */}
              {project.dataset && (
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Dataset</h3>
                  <p className="text-sm text-slate-600 mb-2">{project.dataset}</p>
                  {project.datasetSize && (
                    <p className="text-xs text-slate-500">
                      Size: {project.datasetSize}
                    </p>
                  )}
                </div>
              )}

              {/* Performance Metrics */}
              {project.modelPerformance && project.modelPerformance.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Performance</h3>
                  <div className="space-y-3">
                    {project.modelPerformance.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-slate-600 mb-1">{metric.metric}</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-xl font-bold text-blue-600">
                            {metric.value}
                          </p>
                          {metric.unit && (
                            <p className="text-sm text-slate-500">{metric.unit}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject) => (
                <Link key={relProject.id} href={`/projects/${relProject.slug}`}>
                  <div className="h-full rounded-lg border border-slate-200 overflow-hidden hover:border-blue-400 transition-all hover:shadow-lg group">
                    <div className="relative h-40 w-full overflow-hidden bg-slate-50 border-b border-slate-200">
                      <Image
                        src={relProject.image}
                        alt={relProject.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {relProject.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {relProject.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
