import type { Project } from '@/types'

export const residentialCourtyards: Project = {
  slug: 'residential-courtyards',
  title: 'Residential Courtyard Gardens',
  location: 'Berlin, Germany',
  year: 2022,
  typology: 'Residential Landscape',
  role: 'Landscape Designer',
  firm: 'TOPOS Stadtplanung',
  scope: [
    'Courtyard Design',
    'Planting Concept',
    'Play Spaces',
    'Community Gardens',
  ],
  tools: ['AutoCAD', 'Vectorworks', 'SketchUp', 'Adobe Illustrator'],
  description: `This series of residential courtyard gardens transforms underutilized inner-block spaces into vibrant community landscapes. Working within the constraints of Berlin's typical Hinterhof typology, the design maximizes greenery, social function, and ecological value.

Each courtyard responds to its specific context—orientation, existing trees, building character, and resident demographics. Common elements include naturalistic planting that supports biodiversity, flexible gathering spaces, safe play areas for children, and opportunities for resident gardening.

The project demonstrates how thoughtful landscape design can significantly improve quality of life in dense urban housing, creating pockets of nature and community within the city fabric.`,
  featured: false,
  heroImage: '/images/projects/courtyards/hero.jpg',
  images: [
    {
      src: '/images/projects/courtyards/hero.jpg',
      caption: 'Courtyard garden with naturalistic planting',
    },
    {
      src: '/images/projects/courtyards/02.jpg',
      caption: 'Community gathering space with pergola',
    },
    {
      src: '/images/projects/courtyards/03.jpg',
      caption: 'Play area integrated with landscape',
    },
    {
      src: '/images/projects/courtyards/04.jpg',
      caption: 'Planting plan with species selection',
    },
  ],
}

