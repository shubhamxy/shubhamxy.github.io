'use client'

import { cn } from '@/lib/utils'
import { ElementType, ReactNode } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: ReactNode
  as?: ElementType
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
}

export function Container({
  size = 'xl',
  className,
  children,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-6 md:px-8 lg:px-12',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Component>
  )
}
