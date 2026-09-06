'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlusIcon } from 'lucide-react'
import { buttonMotionProps, buttonVariants, iconVariants } from '@/lib/animations'

const MotionLink = motion.create(Link)

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-center border-t border-black/10 bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/80 md:hidden">
      <MotionLink
        href="/create"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-2.5 text-sm font-bold text-white shadow-md"
        {...buttonMotionProps}
        variants={buttonVariants}
      >
        <motion.span variants={iconVariants} className="flex items-center justify-center">
          <PlusIcon size={18} />
        </motion.span>
        Post
      </MotionLink>
    </nav>
  )
}
