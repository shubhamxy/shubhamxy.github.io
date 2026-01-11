'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Text, Container } from '@/components/ui'
import { profile } from '@/content/profile'

export function ExperienceHeader() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
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

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-3xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-stone-400 mb-6"
              />
              <Text variant="overline" color="secondary" className="mb-4">
                Career
              </Text>
              <Text variant="display-md" className="mb-6">
                Professional Experience
              </Text>
              <Text variant="body-lg" color="secondary">
                A journey through architecture and landscape architecture, 
                from foundational practice in India to specialized work in 
                Germany&apos;s leading design studios.
              </Text>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div 
            className="lg:col-span-4 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div 
                className="absolute -inset-3 border border-stone-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              
              {/* Image */}
              <motion.div 
                className="relative w-48 h-60 md:w-56 md:h-72 overflow-hidden bg-stone-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile.jpeg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </motion.div>
              
              {/* Corner accent */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-12 h-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-stone-400" />
                <div className="absolute bottom-0 right-0 h-full w-[1px] bg-stone-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

