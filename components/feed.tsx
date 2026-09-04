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

export function Feed() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/app-background.png"
          alt="App Background"
          fill
          className="object-cover brightness-50 contrast-110"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col gap-2 p-2">
        <Post />
      </div>
      <NavigationBar />
    </div>
  )
}

function NavigationBar() {
  return (
    <div className="text-background absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
      <div className="flex items-center justify-around">
        <motion.button
          className="border-background/80 flex cursor-pointer items-center justify-center rounded-xl border-2 p-2"
          {...buttonMotionProps}
          variants={buttonVariants}
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <PlusIcon />
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}
