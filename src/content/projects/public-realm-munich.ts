import type { Project } from '@/types'

export const publicRealmMunich: Project = {
  slug: 'public-realm-munich',
  title: 'Public Realm Enhancement',
  location: 'Munich, Germany',
  year: 2024,
  typology: 'Urban Design',
  role: 'Landscape Architect & Space Planner',
  firm: 'MK.LANDSCHAFT',
  scope: [
    'Streetscape Design',
    'Plaza Redesign',
    'Urban Furniture',
    'Lighting Concept',
  ],
  tools: ['Vectorworks', 'Lumion', 'Adobe Photoshop', 'Adobe InDesign'],
  description: `This public realm enhancement project transforms a network of streets and plazas in central Munich into cohesive, pedestrian-friendly spaces. The design balances the historic character of the area with contemporary needs for climate adaptation and social activation.

Key interventions include expanded pedestrian zones, integrated tree planting for urban cooling, and flexible gathering spaces that accommodate markets, events, and everyday use. A unified material palette of local stone and carefully detailed street furniture creates visual coherence while respecting the distinct character of individual spaces.

The project demonstrates how incremental public realm improvements can significantly enhance urban quality of life, creating spaces where people choose to linger, meet, and engage with their city.`,
  featured: true,
  heroImage: '/images/projects/public-realm/hero.jpg',
  images: [
    {
      src: '/images/projects/public-realm/hero.jpg',
      caption: 'Redesigned plaza with integrated seating and planting',
    },
    {
      src: '/images/projects/public-realm/02.jpg',
      caption: 'Streetscape section showing tree planting strategy',
    },
    {
      src: '/images/projects/public-realm/03.jpg',
      caption: 'Material and furniture palette',
    },
    {
      src: '/images/projects/public-realm/04.jpg',
      caption: 'Evening view with integrated lighting concept',
    },
  ],
}

