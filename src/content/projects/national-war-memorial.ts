import type { Project } from '@/types'

export const nationalWarMemorial: Project = {
  slug: 'national-war-memorial',
  title: 'National War Memorial',
  location: 'New Delhi, India',
  year: 2017,
  typology: 'Memorial Landscape',
  role: 'Design Architect',
  scope: [
    'Memorial Design',
    'Landscape Architecture',
    'Symbolic Narrative',
    'Public Gathering Space',
  ],
  tools: ['AutoCAD', 'SketchUp', 'Lumion', 'Adobe Photoshop'],
  description: `This finalist entry for India's National War Memorial competition proposed a contemplative landscape that honors sacrifice while fostering peace and reflection. Situated at the heart of New Delhi's ceremonial axis, the design responds to both the monumental scale of the setting and the intimate nature of remembrance.

The memorial is conceived as a journey through landscape—from arrival through ceremonial spaces to a central place of quiet contemplation. Water, stone, and vegetation are the primary materials, each carrying symbolic weight: water for purification and continuity, stone for permanence and strength, vegetation for renewal and hope.

The design seeks to create a space that serves multiple modes of engagement—from large state ceremonies to individual moments of remembrance. It is a landscape of dignity, appropriate to both celebration and mourning.`,
  featured: true,
  heroImage: '/images/projects/war-memorial/hero.jpg',
  images: [
    {
      src: '/images/projects/war-memorial/hero.jpg',
      caption: 'Aerial perspective of memorial landscape',
    },
    {
      src: '/images/projects/war-memorial/02.jpg',
      caption: 'Central contemplation space with reflection pool',
    },
    {
      src: '/images/projects/war-memorial/03.jpg',
      caption: 'Ceremonial approach sequence',
    },
    {
      src: '/images/projects/war-memorial/04.jpg',
      caption: 'Concept diagram showing symbolic narrative',
    },
  ],
}

