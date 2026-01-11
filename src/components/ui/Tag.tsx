'use client'

import { cn } from '@/lib/utils'

type TagVariant = 'default' | 'outline' | 'filled'
type TagSize = 'sm' | 'md'

interface TagProps {
  variant?: TagVariant
  size?: TagSize
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<TagVariant, string> = {
  default: 'bg-stone-100 text-stone-700',
  outline: 'border border-stone-300 text-stone-600',
  filled: 'bg-stone-800 text-stone-100',
}

const sizeStyles: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export function Tag({
  variant = 'default',
  size = 'sm',
  className,
  children,
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}

