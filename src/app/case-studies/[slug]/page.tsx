import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CaseStudyClient } from './CaseStudyClient'
import { getProjectBySlug, projects } from '@/content'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description.slice(0, 160),
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <CaseStudyClient project={project} />
}
