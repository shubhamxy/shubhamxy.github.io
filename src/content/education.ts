import type { Education, Skill, Achievement } from '@/types'

export const education: Education[] = [
  {
    id: 'masters',
    degree: 'Master of Landscape Architecture',
    institution: 'Hochschule Anhalt',
    location: 'Dessau, Germany',
    year: '2020–2022',
    description: 'Focus on urban landscape systems, ecological design, and spatial planning. Thesis explored healing garden design principles for healthcare environments.',
  },
  {
    id: 'bachelors',
    degree: 'Bachelor of Architecture',
    institution: 'Maharshi Dayanand University',
    location: 'Haryana, India',
    year: '2011–2016',
    description: 'Comprehensive architectural education covering design studios, building technology, urban planning, and professional practice.',
  },
]

export const skills: Skill[] = [
  {
    category: 'Design Software',
    items: ['AutoCAD', 'Vectorworks', 'Revit', 'SketchUp'],
  },
  {
    category: 'Visualization',
    items: ['Lumion', 'Twinmotion', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    category: 'Analysis & Planning',
    items: ['GIS', 'QGIS', 'Adobe Premiere Pro'],
  },
  {
    category: 'Technical Skills',
    items: ['Construction Documentation', 'Planting Design', 'Material Specification', 'Cost Estimation'],
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'German (Professional)', 'Hindi (Native)'],
  },
]

export const achievements: Achievement[] = [
  {
    id: 'wurzburg',
    title: '1st Prize — University Hospital Würzburg Healing Gardens',
    description: 'Award-winning competition entry for therapeutic landscape design at a major German university hospital, focusing on patient recovery and wellbeing through biophilic design principles.',
    year: 2023,
  },
  {
    id: 'war-memorial',
    title: 'Finalist — National War Memorial Competition',
    description: 'Recognized entry in India\'s prestigious national memorial design competition, proposing a contemplative landscape that honors sacrifice while fostering peace and reflection.',
    year: 2017,
  },
]

