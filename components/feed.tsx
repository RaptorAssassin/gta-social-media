'use client'

import { Post } from './post'

export function Feed() {
  return (
    <div className="flex w-full flex-col gap-3 p-2 pt-4 md:p-4 md:pt-6">
      <Post />
    </div>
  )
}
