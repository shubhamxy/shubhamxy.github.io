// Project types for architectural portfolio

export type ProjectImage = {
  src: string
  caption?: string
  alt?: string
}

export type Project = {
  slug: string
  title: string
  location: string
  year: number
  typology: string
  role: string
  firm?: string
  scope: string[]
  tools: string[]
  description: string
  featured?: boolean
  heroImage: string
  images: ProjectImage[]
}

export type Experience = {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  type: 'full-time' | 'part-time' | 'internship' | 'freelance'
}

export type Education = {
  id: string
  degree: string
  institution: string
  location: string
  year: string
  description?: string
}

export type Skill = {
  category: string
  items: string[]
}

export type Achievement = {
  id: string
  title: string
  description: string
  year: number
}

export type Profile = {
  name: string
  title: string
  location: string
  email: string
  linkedin?: string
  portfolio?: string
  bio: string
  shortBio: string
}

