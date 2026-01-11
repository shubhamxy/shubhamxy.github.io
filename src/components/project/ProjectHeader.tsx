'use client'

import { motion } from 'framer-motion'
import { Text, Tag, Container } from '@/components/ui'
import type { Project } from '@/types'

interface ProjectHeaderProps {
  project: Project
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 115, 85, 0.05) 0%, transparent 70%)',
          }}
        />
        <motion.div 
          className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-stone-200 via-transparent to-transparent"
          style={{ right: '15%' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Overline */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-stone-400"
            />
            <Text variant="overline" color="secondary">
              {project.typology}
            </Text>
            <span className="text-stone-300">—</span>
            <Text variant="overline" color="secondary">
              {project.year}
            </Text>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Text variant="display-md" className="mb-8 max-w-4xl">
              {project.title}
            </Text>
          </motion.div>

          {/* Meta info grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { label: 'Location', value: project.location },
              { label: 'Role', value: project.role },
              ...(project.firm ? [{ label: 'Firm', value: project.firm }] : []),
              { label: 'Year', value: String(project.year) },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Text variant="overline" color="tertiary" className="mb-2">
                  {item.label}
                </Text>
                <Text variant="body" color="primary">
                  {item.value}
                </Text>
              </motion.div>
            ))}
          </motion.div>

          {/* Scope tags */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {project.scope.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Tag variant="outline" size="md">
                  {item}
                </Tag>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
