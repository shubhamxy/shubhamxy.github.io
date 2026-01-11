'use client'

import { motion, Variants } from 'framer-motion'
import { ProjectImage } from './ProjectImage'
import { cn } from '@/lib/utils'
import type { ProjectImage as ProjectImageType } from '@/types'

interface ImageGridProps {
  images: ProjectImageType[]
  columns?: 1 | 2 | 3
  className?: string
  onImageClick?: (index: number) => void
}

const gridStyles: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export function ImageGrid({
  images,
  columns = 2,
  className,
  onImageClick,
}: ImageGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn('grid gap-6 md:gap-8', gridStyles[columns], className)}
    >
      {images.map((image, index) => (
        <motion.div key={image.src} variants={itemVariants}>
          <ProjectImage
            image={image}
            onClick={onImageClick ? () => onImageClick(index) : undefined}
            aspectRatio={columns === 1 ? 'wide' : 'landscape'}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
