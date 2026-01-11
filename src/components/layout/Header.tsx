'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Container } from '@/components/ui'
import { navigation, siteConfig } from '@/config/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(250, 250, 249, 0)', 'rgba(250, 250, 249, 0.8)']
  )
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      style={{ backgroundColor: headerBg, backdropFilter: headerBlur }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        hasScrolled && "border-b border-stone-200/50 shadow-sm"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <Link href="/" className="group relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-xl md:text-2xl font-normal text-stone-900 transition-all duration-300 group-hover:tracking-wider">
                {siteConfig.name}
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[1px] bg-stone-900"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex items-center gap-10"
          >
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative font-body text-sm tracking-wide transition-all duration-300 py-2',
                      isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-0 left-0 right-0 h-[2px] bg-stone-900"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <motion.span
                      className="absolute inset-0 bg-stone-100 rounded -z-0"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden p-2 text-stone-900 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className='w-full h-[2px] bg-stone-900 origin-left'
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className='w-full h-[2px] bg-stone-900'
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className='w-full h-[2px] bg-stone-900 origin-left'
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-stone-50/95 backdrop-blur-xl border-b border-stone-200"
      >
        <Container>
          <div className="py-8 flex flex-col gap-6">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'font-body text-2xl transition-colors py-2 block',
                      isActive ? 'text-stone-900' : 'text-stone-500'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </motion.div>
    </motion.header>
  )
}
