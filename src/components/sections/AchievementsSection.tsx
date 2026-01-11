'use client'

import { motion } from 'framer-motion'
import { Text, Container } from '@/components/ui'
import { achievements } from '@/content/education'

export function AchievementsSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 115, 85, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FAFAF9 1px, transparent 1px),
              linear-gradient(to bottom, #FAFAF9 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
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
            className="h-[1px] bg-stone-600 mb-6"
          />
          <Text variant="overline" color="inverse" className="mb-3 text-stone-400">
            Recognition
          </Text>
          <Text variant="heading-lg" color="inverse">
            Achievements & Awards
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative p-8 bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-sm hover:border-stone-600/50 hover:bg-stone-800/70 transition-all duration-300">
                {/* Accent corner */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-stone-500 to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-stone-500 to-transparent" />
                </motion.div>

                <Text variant="overline" color="inverse" className="mb-4 text-stone-500">
                  {achievement.year}
                </Text>
                <Text variant="heading-sm" color="inverse" className="mb-4 group-hover:text-stone-100 transition-colors">
                  {achievement.title}
                </Text>
                <Text variant="body" color="inverse" className="text-stone-400">
                  {achievement.description}
                </Text>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-stone-500 text-sm">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
