'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Text, Container, Button } from '@/components/ui'
import { profile } from '@/content'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-stone-50 pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 115, 85, 0.08) 0%, transparent 70%)',
            y,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 162, 158, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1C1917 1px, transparent 1px),
              linear-gradient(to bottom, #1C1917 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Diagonal accent line */}
        <motion.div
          className="absolute top-0 right-0 w-[1px] h-[60vh] bg-gradient-to-b from-stone-300 via-stone-200 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ right: '15%' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div 
            className="lg:col-span-7"
            style={{ opacity, scale }}
          >
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text variant="overline" color="secondary" className="mb-6 flex items-center gap-3">
                <motion.span 
                  className="w-8 h-[1px] bg-stone-400"
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                {profile.location}
              </Text>
            </motion.div>

            {/* Name with staggered letters */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <Text variant="display-xl" className="mb-4">
                {profile.name.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.03,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </Text>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Text variant="heading-lg" color="secondary" className="mb-8 md:mb-12">
                {profile.title}
              </Text>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 md:mb-14"
            >
              <Text variant="body-lg" color="secondary" className="max-w-2xl">
                {profile.shortBio}
              </Text>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button as="link" href="/portfolio" variant="primary" size="lg">
                  View Portfolio
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button as="link" href="/experience" variant="outline" size="lg">
                  Experience
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 border border-stone-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.div
                className="absolute -inset-8 border border-stone-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden bg-stone-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/profile.jpeg"
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent" />
              </motion.div>
              
              {/* Accent corner */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-stone-400" />
                <div className="absolute bottom-0 right-0 h-full w-[1px] bg-stone-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span 
          className="text-xs text-stone-400 tracking-widest uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
