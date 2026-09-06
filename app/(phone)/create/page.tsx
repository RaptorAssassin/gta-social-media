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
    <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/app-background.png"
          alt="App Background"
          fill
          sizes="(max-width: 640px) 98vw, 450px"
          className="object-cover brightness-50 contrast-110"
          priority
        />
      </div>

      <form className="text-background relative z-10 flex flex-1 flex-col gap-3 overflow-y-auto p-2 pb-4">
        <header className="flex items-center gap-2">
          <Link
            href="/"
            className="text-background rounded-full p-1.5 transition hover:bg-white/10"
          >
            <ArrowLeftIcon size={20} />
          </Link>
          <h1 className="flex-1 text-center text-lg font-bold tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            Create Post
          </h1>
          <span className="w-8" />
        </header>

        <div
          className={`relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl transition ${previewPost?.imageUrl ? 'bg-background border-0 shadow-lg shadow-black/10' : 'bg-background hover:bg-background/95 focus-within:ring-foreground/10 border-foreground/20 focus-within:border-foreground/30 min-h-40 border-2 border-dashed shadow-lg shadow-black/10 focus-within:border-solid focus-within:ring-2'}`}
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
              width={400}
              height={400}
              alt="Preview"
              unoptimized
              className="pointer-events-none block h-auto max-h-[45vh] w-full rounded-xl object-contain"
            />
          ) : (
            <div className="text-foreground/70 flex flex-col items-center gap-2 px-6 py-10">
              <div className="bg-foreground/5 rounded-full p-3">
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
            className="bg-background text-foreground hover:bg-background/90 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold shadow-lg shadow-black/10 transition active:scale-[0.98]"
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
          className="text-foreground placeholder:text-foreground/60 focus:ring-foreground/10 bg-background min-h-20 w-full resize-none rounded-xl p-3 text-sm font-semibold shadow-lg shadow-black/10 outline-none focus:ring-2"
        />

        <input
          type="text"
          name="username"
          placeholder="Choose a username"
          required
          ref={usernameInput}
          className="text-foreground placeholder:text-foreground/60 focus:ring-foreground/10 bg-background w-full resize-none rounded-xl p-3 text-sm font-semibold shadow-lg shadow-black/10 outline-none focus:ring-2"
        />

        <button
          type="submit"
          className="mt-auto w-full rounded-xl bg-white py-3 text-sm font-bold text-black shadow-md transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
        >
          Post
        </button>
      </form>

      {isEditorOpen && previewPost?.imageUrl && (
        <div className="absolute inset-0 z-20 flex min-h-0 flex-1 flex-col overflow-hidden bg-[#1a1a1a]">
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
