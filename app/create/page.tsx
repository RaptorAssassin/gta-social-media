'use client'

import Link from 'next/link'
import { Post } from '@/lib/types'
import { ArrowLeftIcon, PencilIcon, UploadIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ImageEditor } from '@/components/image-editor'

export default function CreatePage() {
  const [previewPost, setPreviewPost] = useState<Post | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const usernameInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const savedUsername = localStorage.getItem('username')
    if (savedUsername && usernameInput.current) {
      usernameInput.current.value = savedUsername
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-3 p-2 pt-4 md:p-4 md:pt-6">
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
        <form className="flex flex-col gap-4">
          <header className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full p-1.5 transition hover:bg-black/5"
            >
              <ArrowLeftIcon size={20} />
            </Link>
            <h1 className="flex-1 text-center text-lg font-bold tracking-tight">
              Create Post
            </h1>
            <span className="w-8" />
          </header>

          <div
            className={`relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border transition ${previewPost?.imageUrl ? 'border-black/5 bg-white shadow-sm' : 'hover:bg-black/[0.02] focus-within:ring-foreground/10 border-black/10 min-h-40 border-2 border-dashed bg-white focus-within:border-solid focus-within:ring-2'}`}
          >
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
              <Image
                src={previewPost.imageUrl}
                width={600}
                height={600}
                alt="Preview"
                unoptimized
                className="pointer-events-none block h-auto max-h-[45vh] w-full rounded-xl object-contain"
              />
            ) : (
              <div className="text-foreground/70 flex flex-col items-center gap-2 px-6 py-10">
                <div className="bg-black/5 rounded-full p-3">
                  <UploadIcon size={24} className="text-foreground" />
                </div>
                <span className="text-foreground text-center text-sm font-semibold">
                  Click to add an image or drag and drop here
                </span>
              </div>
            )}
          </div>

          {previewPost?.imageUrl && (
            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold shadow-sm transition hover:bg-black/5 active:scale-[0.98]"
            >
              <PencilIcon size={18} />
              Edit Image
            </button>
          )}

          <textarea
            placeholder="Write a caption... (optional)"
            name="caption"
            required
            rows={3}
            className="placeholder:text-foreground/50 focus:ring-foreground/10 min-h-20 w-full resize-none rounded-xl border border-black/10 bg-white p-3 text-sm font-medium outline-none focus:border-black/20 focus:ring-2"
          />

          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            required
            ref={usernameInput}
            className="placeholder:text-foreground/50 focus:ring-foreground/10 w-full rounded-xl border border-black/10 bg-white p-3 text-sm font-medium outline-none focus:border-black/20 focus:ring-2"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-black py-3 text-sm font-bold text-white shadow-md transition hover:bg-black/90 active:scale-[0.98] disabled:opacity-50"
          >
            Post
          </button>
        </form>
      </div>

      {isEditorOpen && previewPost?.imageUrl && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white">
          <ImageEditor
            src={previewPost.imageUrl}
            onSave={({ blob }) => {
              const url = URL.createObjectURL(blob)
              setPreviewPost((prev) => {
                if (prev?.imageUrl) URL.revokeObjectURL(prev.imageUrl)
                if (prev) return { ...prev, imageUrl: url }
                return prev
              })
              setIsEditorOpen(false)
            }}
            onCancel={() => setIsEditorOpen(false)}
            onLoadError={() => setIsEditorOpen(false)}
          />
        </div>
      )}
    </div>
  )
}
