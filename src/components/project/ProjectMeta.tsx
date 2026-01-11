'use client'

import { motion } from 'framer-motion'
import { Text, Container, Tag, Divider } from '@/components/ui'
import type { Project } from '@/types'

interface ProjectMetaProps {
  project: Project
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {/* Tools */}
          <div>
            <Text variant="overline" color="tertiary" className="mb-4">
              Tools & Software
            </Text>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool} variant="default" size="md">
                  {tool}
                </Tag>
              ))}
            </div>
          </div>

          {/* Scope details */}
          <div>
            <Text variant="overline" color="tertiary" className="mb-4">
              Project Scope
            </Text>
            <ul className="space-y-2">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0" />
                  <Text variant="body" color="secondary">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <Divider className="my-12 md:my-16" />

        {/* Project summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-1">
            <Text variant="overline" color="tertiary">
              Project Type
            </Text>
          </div>
          <div className="md:col-span-2">
            <Text variant="heading-sm" color="primary" className="mb-2">
              {project.typology}
            </Text>
            <Text variant="body" color="secondary">
              {project.location} · {project.year}
            </Text>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

