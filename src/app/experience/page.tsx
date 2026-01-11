import { Metadata } from 'next'
import { Timeline, EducationSection, AchievementsSection } from '@/components/sections'
import { ExperienceHeader } from './ExperienceHeader'
import { experiences } from '@/content'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Experience',
  description: `Professional experience, education, and achievements of ${profile.name}, Architect and Landscape Architect.`,
}

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHeader />
      <Timeline experiences={experiences} />
      <EducationSection />
      <AchievementsSection />
    </>
  )
}
