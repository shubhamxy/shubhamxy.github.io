'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Text } from '@/components/ui'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link href={`/case-studies/${project.slug}`} className="group block">
        {/* Image Container */}
        <motion.div 
          className="relative aspect-[4/3] overflow-hidden bg-stone-200 mb-6 rounded-sm"
          whileHover="hover"
        >
          {/* Placeholder for missing images */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 flex items-center justify-center">
            <Text variant="body-sm" color="tertiary">
              {project.title}
            </Text>
          </div>
          
          <motion.div
            className="absolute inset-0"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                e.currentTarget.style.opacity = '0'
              }}
            />
          </motion.div>
          
          {/* Gradient overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/0 to-stone-900/0"
            initial={{ opacity: 0 }}
            variants={{
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* View project text on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ opacity: 0, y: 20 }}
            variants={{
              hover: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="text-white text-sm font-medium tracking-wide flex items-center gap-2">
              View Project 
              <motion.span
                variants={{
                  hover: { x: 4 }
                }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.div>
          
          {/* Corner accent */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8"
            initial={{ opacity: 0, scale: 0.5 }}
            variants={{
              hover: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-[1px] bg-white/50 absolute top-0 right-0" />
            <div className="h-full w-[1px] bg-white/50 absolute top-0 right-0" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-2">
          <motion.div 
            className="flex items-center gap-2 text-stone-500"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            <Text variant="caption" as="span">
              {project.typology}
            </Text>
            <span className="text-stone-300">·</span>
            <Text variant="caption" as="span">
              {project.year}
            </Text>
          </motion.div>
          
          <Text 
            variant="heading-sm" 
            as="h3"
            className="group-hover:text-stone-600 transition-colors duration-300"
          >
            {project.title}
          </Text>
          
          <div className="flex items-center gap-2">
            <motion.div
              className="w-0 h-[1px] bg-stone-400 group-hover:w-4 transition-all duration-300"
            />
            <Text variant="body-sm" color="secondary">
              {project.location}
            </Text>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
