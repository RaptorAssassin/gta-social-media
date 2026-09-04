import { MotionProps } from 'motion/react'

export const buttonMotionProps: MotionProps = {
  initial: 'initial' as const,
  whileHover: 'hover' as const,
  whileTap: 'tap' as const,
}

export const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

export const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}
