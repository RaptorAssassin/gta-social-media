'use client'

import { Post } from '@/lib/types'
import { UploadIcon } from 'lucide-react'
import { useRef, useState } from 'react'

export default function CreatePage() {
  const [previewPost, setPreviewPost] = useState<Post | null>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="h-full w-full">
      <form className="flex flex-col items-center gap-2 p-2">
        <h1 className="w-full text-center text-2xl font-bold">Create Post</h1>
        <input
          type="text"
          placeholder="Post Caption"
          name="caption"
          className="w-full rounded-md p-1"
        />
        <span>Add Image</span>
        <div className="border-foreground/50 relative flex h-30 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed focus-within:border-solid">
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={imageInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (!file) return
              const url = URL.createObjectURL(file)
              setPreviewPost((prev) => {
                if (prev?.imageUrl) URL.revokeObjectURL(prev.imageUrl)
                if (prev) return { ...prev, imageUrl: url }
                return {
                  id: '',
                  caption: '',
                  imageUrl: url,
                  likes: 0,
                  comments: [],
                  shares: 0,
                }
              })
            }}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 focus:outline-none"
          />
          {previewPost?.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previewPost.imageUrl}
              alt="Preview"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <UploadIcon
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              size={24}
            />
          )}
        </div>
        <button
          type="submit"
          className="border-foreground rounded-md border-2 p-1"
        >
          Post
        </button>
      </form>
    </div>
  )
}
