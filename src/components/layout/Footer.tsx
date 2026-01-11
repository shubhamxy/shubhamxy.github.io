'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container, Text, Divider } from '@/components/ui'
import { profile } from '@/content'
import { navigation } from '@/config/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-50 py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-stone-800/50 to-transparent opacity-50" />
        <motion.div 
          className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-stone-700 via-stone-800 to-transparent"
          style={{ right: '20%' }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
        >
          {/* Brand & Bio */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Text variant="heading-md" color="inverse" className="mb-4">
                {profile.name}
              </Text>
              <Text variant="body-sm" color="inverse" className="text-stone-400 mb-6 max-w-md">
                {profile.shortBio}
              </Text>
              <Text variant="body-sm" color="inverse" className="text-stone-500">
                {profile.location}
              </Text>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text variant="overline" color="inverse" className="text-stone-500 mb-4">
                Navigation
              </Text>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-stone-300 hover:text-stone-50 transition-colors text-sm group flex items-center gap-2">
                  <motion.span
                    className="w-0 h-[1px] bg-stone-50 group-hover:w-3 transition-all duration-300"
                  />
                  Home
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-stone-300 hover:text-stone-50 transition-colors text-sm group flex items-center gap-2"
                  >
                    <motion.span
                      className="w-0 h-[1px] bg-stone-50 group-hover:w-3 transition-all duration-300"
                    />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Text variant="overline" color="inverse" className="text-stone-500 mb-4">
                Connect
              </Text>
              <div className="flex flex-col gap-3">
                <motion.a
                  href={`mailto:${profile.email}`}
                  className="text-stone-300 hover:text-stone-50 transition-colors text-sm"
                  whileHover={{ x: 4 }}
                >
                  {profile.email}
                </motion.a>
                {profile.linkedin && (
                  <motion.a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-stone-50 transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    LinkedIn ↗
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Divider className="my-12 bg-stone-800" />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <Text variant="caption" color="inverse" className="text-stone-500">
            © {currentYear} {profile.name}. All rights reserved.
          </Text>
          <Text variant="caption" color="inverse" className="text-stone-500">
            Architect & Landscape Architect
          </Text>
        </motion.div>
      </Container>
    </footer>
  )
}
