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
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white p-3 shadow-sm">
      <div className="flex max-h-[50dvh] w-full items-center justify-center overflow-hidden rounded-lg bg-white">
        <Image
          className="max-h-full max-w-full object-contain"
          src="/images/background-mobile.png"
          alt="Post Image"
          width={900}
          height={1600}
          draggable={false}
          sizes="(max-width: 768px) 100vw, 600px"
          style={{
            height: 'auto',
            width: 'auto',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        />
      </div>
      <div className="mt-3 flex shrink-0 gap-4">
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="text-foreground/80 hover:text-foreground flex cursor-pointer items-center gap-1.5 text-sm font-medium"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <HeartIcon size={18} />
          </motion.span>
          <span>123</span>
        </motion.button>
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="text-foreground/80 hover:text-foreground flex cursor-pointer items-center gap-1.5 text-sm font-medium"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <MessageCircleIcon size={18} />
          </motion.span>
          <span>42</span>
        </motion.button>
        <motion.button
          {...buttonMotionProps}
          variants={buttonVariants}
          className="text-foreground/80 hover:text-foreground flex cursor-pointer items-center gap-1.5 text-sm font-medium"
        >
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <SendIcon size={18} />
          </motion.span>
          <span>12</span>
        </motion.button>
      </div>
      <div className="mt-3 flex shrink-0 gap-1.5 text-sm">
        <span className="font-semibold">Username</span>
        <p className="text-foreground/80">Test Description</p>
      </div>
    </div>
  )
}
