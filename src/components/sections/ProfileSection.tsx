'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Text, Container, Button, Divider } from '@/components/ui'
import { profile } from '@/content'
import { skills, achievements } from '@/content/education'

export function ProfileSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-stone-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent"
          style={{ left: '10%' }}
        />
        <motion.div 
          className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent"
          style={{ right: '10%' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Profile Image - shown on larger screens */}
          <motion.div 
            className="hidden lg:block lg:col-span-4"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-32"
            >
              <div className="relative">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -inset-3 border border-stone-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                  <Image
                    src="/profile.jpeg"
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 300px"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                
                {/* Name label */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-stone-900 text-stone-50 px-6 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Text variant="overline" color="inverse" className="text-stone-300">
                    {profile.location}
                  </Text>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main content */}
          <div className="lg:col-span-5 lg:col-start-6">
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
                About
              </Text>
              <Text variant="heading-lg" className="mb-8">
                Professional Profile
              </Text>
              
              <div className="space-y-6">
                {profile.bio.split('\n\n').map((paragraph, index) => (
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

              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button as="link" href="/experience" variant="primary" size="md">
                    View Full Experience
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-3"
            style={{ y }}
          >
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 p-6 bg-white/50 backdrop-blur-sm rounded-sm border border-stone-200/50"
            >
              <Text variant="overline" color="tertiary" className="mb-6">
                Achievements
              </Text>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={achievement.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <Text variant="body" color="primary" className="font-medium mb-1 group-hover:text-stone-600 transition-colors">
                      {achievement.title}
                    </Text>
                    <Text variant="caption" color="tertiary">
                      {achievement.year}
                    </Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Divider className="mb-12" />

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text variant="overline" color="tertiary" className="mb-6">
                Key Skills
              </Text>
              <div className="space-y-4">
                {skills.slice(0, 2).map((skillGroup, index) => (
                  <motion.div 
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Text variant="caption" color="tertiary" className="mb-2">
                      {skillGroup.category}
                    </Text>
                    <Text variant="body-sm" color="secondary">
                      {skillGroup.items.slice(0, 4).join(', ')}
                    </Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
