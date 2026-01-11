'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Text, Container, Tag } from '@/components/ui'
import { ProjectCard } from '@/components/project'
import { projects, getAllTypologies } from '@/content'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const typologies = getAllTypologies()

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.typology === activeFilter)
    : projects

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-stone-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 115, 85, 0.05) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1C1917 1px, transparent 1px),
                linear-gradient(to bottom, #1C1917 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-stone-400 mb-6"
            />
            <Text variant="overline" color="secondary" className="mb-4">
              Work
            </Text>
            <Text variant="display-md" className="mb-6 max-w-3xl">
              Portfolio
            </Text>
            <Text variant="body-lg" color="secondary" className="max-w-2xl">
              A selection of architectural and landscape projects spanning urban design, 
              healthcare environments, campus planning, and public realm interventions.
            </Text>
          </motion.div>

          {/* Filter tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.button
              onClick={() => setActiveFilter(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="transition-colors"
            >
              <Tag
                variant={activeFilter === null ? 'filled' : 'outline'}
                size="md"
              >
                All Projects
              </Tag>
            </motion.button>
            {typologies.map((typology, index) => (
              <motion.button
                key={typology}
                onClick={() => setActiveFilter(typology)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="transition-colors"
              >
                <Tag
                  variant={activeFilter === typology ? 'filled' : 'outline'}
                  size="md"
                >
                  {typology}
                </Tag>
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 bg-stone-50">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Text variant="body" color="tertiary">
                No projects found for this category.
              </Text>
            </motion.div>
          )}
        </Container>
      </section>
    </>
  )
}
