import { MetadataRoute } from 'next'
import projects from '@/lib/projects.json'
import type { Project } from '@/lib/types'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'

  const projectRoutes = (projects as Project[]).map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...projectRoutes,
  ]
}
