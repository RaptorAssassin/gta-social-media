'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlusIcon } from 'lucide-react'
import { buttonMotionProps, buttonVariants, iconVariants } from '@/lib/animations'

const MotionLink = motion.create(Link)

export function Sidebar() {
  return (
    <MotionLink
      href="/create"
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-black/90"
      {...buttonMotionProps}
      variants={buttonVariants}
    >
      <motion.span variants={iconVariants} className="flex items-center justify-center">
        <PlusIcon size={18} />
      </motion.span>
      Post
    </MotionLink>
  )
}
