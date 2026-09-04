'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'

const UnlayerImageEditor = dynamic(
  () =>
    import('@unlayer/react-image-editor').then((module) => module.ImageEditor),
  {
    ssr: false,
  }
)

export function ImageEditor({ src }: { src: string }) {
  const editorRef = useRef(null)

  return (
    <div className="">
      <UnlayerImageEditor ref={editorRef} image={src} />
    </div>
  )
}
