'use client'

import { motion } from 'framer-motion'
import { Text, Container, Tag } from '@/components/ui'
import { education, skills } from '@/content/education'

export function EducationSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-100 relative overflow-hidden">
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

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education */}
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
            <Text variant="overline" color="secondary" className="mb-3">
              Academic Background
            </Text>
            <Text variant="heading-lg" className="mb-12">
              Education
            </Text>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group"
                >
                  <div className="relative pl-6 border-l-2 border-stone-300 hover:border-stone-500 transition-colors duration-300">
                    <motion.div
                      className="absolute left-0 top-0 w-2 h-2 bg-stone-400 rounded-full -translate-x-[5px] group-hover:bg-stone-600 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    />
                    <Text variant="overline" color="tertiary" className="mb-2">
                      {edu.year}
                    </Text>
                    <Text variant="heading-sm" className="mb-1 group-hover:text-stone-600 transition-colors">
                      {edu.degree}
                    </Text>
                    <Text variant="body" color="secondary" className="mb-3">
                      {edu.institution} · {edu.location}
                    </Text>
                    {edu.description && (
                      <Text variant="body-sm" color="tertiary">
                        {edu.description}
                      </Text>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-stone-400 mb-6"
            />
            <Text variant="overline" color="secondary" className="mb-3">
              Expertise
            </Text>
            <Text variant="heading-lg" className="mb-12">
              Skills & Tools
            </Text>

            <div className="space-y-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + groupIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Text variant="overline" color="tertiary" className="mb-4">
                    {skillGroup.category}
                  </Text>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.4 + groupIndex * 0.1 + skillIndex * 0.03
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Tag variant="default" size="md">
                          {skill}
                        </Tag>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
