import type { Project } from '@/types'

export const urbanCampusBerlin: Project = {
  slug: 'urban-campus-berlin',
  title: 'Urban Campus Masterplan',
  location: 'Berlin, Germany',
  year: 2023,
  typology: 'Campus Planning',
  role: 'Landscape Architect',
  firm: 'ST RAUM A.',
  scope: [
    'Campus Masterplan',
    'Public Realm Design',
    'Green Infrastructure',
    'Mobility Concept',
  ],
  tools: ['AutoCAD', 'Vectorworks', 'SketchUp', 'Twinmotion', 'Adobe Suite'],
  description: `This urban campus masterplan for a major Berlin institution reimagines the relationship between academic buildings, public space, and the surrounding neighborhood. The design creates a permeable campus landscape that invites the city in while maintaining distinct academic precincts.

The project addresses contemporary challenges of climate adaptation through an integrated green-blue infrastructure network. Bioswales, rain gardens, and permeable surfaces manage stormwater while creating varied microclimates across the campus.

Mobility is reimagined with priority given to pedestrians and cyclists, while service access is carefully choreographed to minimize conflicts. The result is a campus that functions as both an academic environment and a vibrant piece of urban public realm.`,
  featured: true,
  heroImage: '/images/projects/urban-campus/hero.jpg',
  images: [
    {
      src: '/images/projects/urban-campus/hero.jpg',
      caption: 'Campus masterplan with integrated green network',
    },
    {
      src: '/images/projects/urban-campus/02.jpg',
      caption: 'Central plaza connecting academic buildings',
    },
    {
      src: '/images/projects/urban-campus/03.jpg',
      caption: 'Green-blue infrastructure concept diagram',
    },
    {
      src: '/images/projects/urban-campus/04.jpg',
      caption: 'Pedestrian circulation and activity zones',
    },
  ],
}

