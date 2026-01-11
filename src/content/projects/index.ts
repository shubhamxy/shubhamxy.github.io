import type { Project } from '@/types'
import { healingGardensWurzburg } from './healing-gardens-wurzburg'
import { urbanCampusBerlin } from './urban-campus-berlin'
import { publicRealmMunich } from './public-realm-munich'
import { nationalWarMemorial } from './national-war-memorial'
import { residentialCourtyards } from './residential-courtyards'

export const projects: Project[] = [
  healingGardensWurzburg,
  publicRealmMunich,
  urbanCampusBerlin,
  nationalWarMemorial,
  residentialCourtyards,
]

export const featuredProjects = projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getProjectsByTypology = (typology: string): Project[] => {
  return projects.filter((p) => p.typology === typology)
}

export const getAllTypologies = (): string[] => {
  return [...new Set(projects.map((p) => p.typology))]
}

export {
  healingGardensWurzburg,
  urbanCampusBerlin,
  publicRealmMunich,
  nationalWarMemorial,
  residentialCourtyards,
}

