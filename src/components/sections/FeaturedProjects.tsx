'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Text, Container, Button } from '@/components/ui'
import { ProjectCard } from '@/components/project'
import { featuredProjects } from '@/content'

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-stone-100 to-transparent opacity-50" />
      </motion.div>

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-stone-400 mb-6"
            />
            <Text variant="overline" color="secondary" className="mb-3">
              Selected Work
            </Text>
            <Text variant="heading-lg">
              Featured Projects
            </Text>
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Button as="link" href="/portfolio" variant="ghost" size="md">
              View All Projects →
            </Button>
          </motion.div>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
