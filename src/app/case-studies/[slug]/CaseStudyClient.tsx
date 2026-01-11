'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Text, Container } from '@/components/ui'
import { ProjectHeader, ProjectMeta } from '@/components/project'
import { ImageGrid, Lightbox } from '@/components/media'
import type { Project } from '@/types'

interface CaseStudyClientProps {
  project: Project
}

export function CaseStudyClient({ project }: CaseStudyClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  const handleImageClick = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <ProjectHeader project={project} />

      {/* Hero Image with parallax */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-[21/9] bg-stone-200"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Text variant="body" color="tertiary">
              {project.title} — Hero Image
            </Text>
          </div>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.opacity = '0'
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
        </motion.div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28 bg-stone-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-200 to-transparent"
            style={{ left: '10%' }}
          />
        </div>

        <Container size="md" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-stone-400 mb-6"
            />
            <Text variant="overline" color="tertiary" className="mb-6">
              Project Overview
            </Text>
            <div className="space-y-6">
              {project.description.split('\n\n').map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Text variant="body-lg" color="secondary">
                    {paragraph}
                  </Text>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Image Gallery */}
      <section className="py-20 md:py-28 bg-stone-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1C1917 1px, transparent 1px),
                linear-gradient(to bottom, #1C1917 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-stone-400 mb-6"
            />
            <Text variant="overline" color="tertiary" className="mb-3">
              Gallery
            </Text>
            <Text variant="heading-md">
              Project Images
            </Text>
          </motion.div>

          <ImageGrid
            images={project.images}
            columns={2}
            onImageClick={handleImageClick}
          />
        </Container>
      </section>

      {/* Project Meta */}
      <ProjectMeta project={project} />

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  )
}
