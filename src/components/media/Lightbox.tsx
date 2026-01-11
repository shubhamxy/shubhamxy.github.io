'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Text } from '@/components/ui'
import type { ProjectImage } from '@/types'

interface LightboxProps {
  images: ProjectImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const currentImage = images[currentIndex]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return
    
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        onPrevious()
        break
      case 'ArrowRight':
        onNext()
        break
    }
  }, [isOpen, onClose, onPrevious, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 text-stone-400 hover:text-stone-50 transition-colors"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrevious() }}
                className="absolute left-4 md:left-8 z-10 p-3 text-stone-400 hover:text-stone-50 transition-colors"
                aria-label="Previous image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                className="absolute right-4 md:right-8 z-10 p-3 text-stone-400 hover:text-stone-50 transition-colors"
                aria-label="Next image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-16 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full bg-stone-800/50 flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt || currentImage.caption || 'Project image'}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0'
                  }}
                />
              </div>
            </div>
            
            {/* Caption and counter */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-stone-950/80 to-transparent">
              <div className="flex items-end justify-between gap-4">
                {currentImage.caption && (
                  <Text variant="body-sm" color="inverse" className="text-stone-300">
                    {currentImage.caption}
                  </Text>
                )}
                <Text variant="caption" color="inverse" className="text-stone-500 whitespace-nowrap">
                  {currentIndex + 1} / {images.length}
                </Text>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

