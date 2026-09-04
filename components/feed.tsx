'use client'

import { Post } from './post'
import { motion } from 'motion/react'
import {
  buttonMotionProps,
  buttonVariants,
  iconVariants,
} from '@/lib/animations'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Feed() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/app-background.png"
          alt="App Background"
          fill
          className="object-cover brightness-50 contrast-110"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-1 flex-col gap-2 overflow-y-auto p-2 pb-20">
        <Post />
      </div>
      <NavigationBar />
    </div>
  )
}

const MotionLink = motion.create(Link)

function NavigationBar() {
  return (
    <div className="text-background sticky bottom-3 z-10 mt-auto flex justify-center py-2">
      <div className="flex items-center justify-around">
        <MotionLink
          href="/create"
          className="border-background/80 flex cursor-pointer items-center justify-center rounded-xl border-2 p-2 backdrop-blur-sm"
          {...buttonMotionProps}
          variants={buttonVariants}
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <PlusIcon />
          </motion.span>
        </MotionLink>
      </div>
    </div>
  )
}
