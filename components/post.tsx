'use client'

import { HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import {
  buttonMotionProps,
  buttonVariants,
  iconVariants,
} from '../lib/animations'

export function Post() {
  return (
    <div className="w-full text-background drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
      <Image
        className="overflow-hidden rounded-lg object-cover"
        src="/images/example-post.jpg"
        alt="Post Image"
        width={400}
        height={200}
        draggable={false}
      />
      <div className="mt-1 flex gap-3">
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="flex cursor-pointer items-center gap-1"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <HeartIcon />
          </motion.span>
          <span>123</span>
        </motion.button>
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="flex cursor-pointer items-center gap-1"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <MessageCircleIcon />
          </motion.span>
          <span>42</span>
        </motion.button>
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="flex cursor-pointer items-center gap-1"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <SendIcon />
          </motion.span>
          <span>12</span>
        </motion.button>
      </div>
      <div className="mt-1 flex gap-1">
        <span className="font-semibold">Username</span>
        <p>Test Description</p>
      </div>
    </div>
  )
}
