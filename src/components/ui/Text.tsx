'use client'

import { cn } from '@/lib/utils'
import { ElementType, ReactNode } from 'react'

type TextVariant = 
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'overline'

type TextColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent'

interface TextProps {
  variant?: TextVariant
  color?: TextColor
  as?: ElementType
  className?: string
  children: ReactNode
}

const variantStyles: Record<TextVariant, string> = {
  'display-xl': 'font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-tight',
  'display-lg': 'font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-tight',
  'display-md': 'font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight',
  'heading-lg': 'font-display text-3xl md:text-4xl font-normal tracking-tight',
  'heading-md': 'font-display text-2xl md:text-3xl font-normal',
  'heading-sm': 'font-body text-xl md:text-2xl font-medium',
  'body-lg': 'font-body text-lg md:text-xl leading-relaxed',
  'body': 'font-body text-base leading-relaxed',
  'body-sm': 'font-body text-sm leading-relaxed',
  'caption': 'font-body text-xs leading-normal',
  'overline': 'font-body text-xs uppercase tracking-widest font-medium',
}

const colorStyles: Record<TextColor, string> = {
  primary: 'text-stone-900',
  secondary: 'text-stone-600',
  tertiary: 'text-stone-500',
  inverse: 'text-stone-50',
  accent: 'text-accent',
}

const defaultElements: Record<TextVariant, ElementType> = {
  'display-xl': 'h1',
  'display-lg': 'h1',
  'display-md': 'h2',
  'heading-lg': 'h2',
  'heading-md': 'h3',
  'heading-sm': 'h4',
  'body-lg': 'p',
  'body': 'p',
  'body-sm': 'p',
  'caption': 'span',
  'overline': 'span',
}

export function Text({
  variant = 'body',
  color = 'primary',
  as,
  className,
  children,
}: TextProps) {
  const Component = as || defaultElements[variant]

  return (
    <Component
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  )
}
