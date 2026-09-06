'use client'

import dynamic from 'next/dynamic'
import type { ImageEditorSaveResult } from '@unlayer/react-image-editor'

const UnlayerImageEditor = dynamic(
  () => import('@unlayer/react-image-editor').then((module) => module.ImageEditor),
  {
    ssr: false,
  },
)

type ImageEditorProps = {
  src: string | undefined
  onSave?: (result: ImageEditorSaveResult) => void
  onCancel?: () => void
  onLoadError?: () => void
}

export function ImageEditor({ src, onSave, onCancel, onLoadError }: ImageEditorProps) {
  if (!src) return null

  return <UnlayerImageEditor image={src} onSave={onSave} onCancel={onCancel} onLoadError={onLoadError} />
}
