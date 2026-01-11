'use client'

import { motion } from 'framer-motion'
import { Text, Container } from '@/components/ui'
import type { Experience } from '@/types'

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <section className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-200 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-stone-400 mb-6"
          />
          <Text variant="overline" color="secondary" className="mb-3">
            Career
          </Text>
          <Text variant="heading-lg">
            Professional Experience
          </Text>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-stone-200 transform md:-translate-x-px" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-20">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 top-2 w-3 h-3 bg-stone-900 rounded-full transform -translate-x-1 md:-translate-x-1.5 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-stone-900"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? 'md:pr-16 md:col-start-1'
                      : 'md:pl-16 md:col-start-2'
                  }`}
                  whileHover={{ x: index % 2 === 0 ? -4 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-stone-200/50 hover:border-stone-300/50 hover:shadow-lg transition-all duration-300">
                    {/* Date range */}
                    <Text variant="overline" color="tertiary" className="mb-2">
                      {experience.startDate} — {experience.endDate}
                    </Text>

                    {/* Title & Company */}
                    <Text variant="heading-sm" className="mb-1">
                      {experience.title}
                    </Text>
                    <Text variant="body" color="secondary" className="mb-4">
                      {experience.company} · {experience.location}
                    </Text>

                    {/* Description */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          />
                          <Text variant="body-sm" color="tertiary">
                            {item}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Empty column for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
