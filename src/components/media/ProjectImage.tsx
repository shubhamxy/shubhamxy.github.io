'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ProjectImage as ProjectImageType } from '@/types'

interface ProjectImageProps {
  image: ProjectImageType
  priority?: boolean
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'wide'
  className?: string
  onClick?: () => void
  showCaption?: boolean
}

const aspectRatioStyles: Record<string, string> = {
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
}

export function ProjectImage({
  image,
  priority = false,
  aspectRatio = 'landscape',
  className,
  onClick,
  showCaption = true,
}: ProjectImageProps) {
  return (
    <figure className={cn('group', className)}>
      <motion.div
        whileHover={{ scale: onClick ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'relative overflow-hidden bg-stone-200',
          aspectRatioStyles[aspectRatio],
          onClick && 'cursor-pointer'
        )}
        onClick={onClick}
      >
        {/* Placeholder for missing images */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
          <div className="text-stone-400 text-sm font-body">
            {image.alt || 'Project Image'}
          </div>
        </div>
        <Image
          src={image.src}
          alt={image.alt || image.caption || 'Project image'}
          fill
          priority={priority}
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Hide broken image, show placeholder
            e.currentTarget.style.opacity = '0'
          }}
        />
        
        {/* Hover overlay */}
        {onClick && (
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
        )}
      </motion.div>
      
      {showCaption && image.caption && (
        <figcaption className="mt-3 text-sm text-stone-500 font-body">
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}

