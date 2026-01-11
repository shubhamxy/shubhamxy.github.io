'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button'
  href?: never
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link'
  href: string
  onClick?: never
  type?: never
  disabled?: never
  external?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-stone-900 text-stone-50 hover:bg-stone-800',
  secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300',
  ghost: 'text-stone-900 hover:bg-stone-100',
  outline: 'border border-stone-300 text-stone-900 hover:bg-stone-100',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
  } = props

  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-colors duration-200',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (props.as === 'link') {
    const linkProps = props.external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <Link href={props.href} className={baseStyles} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(baseStyles, props.disabled && 'opacity-50 cursor-not-allowed')}
    >
      {children}
    </button>
  )
}

