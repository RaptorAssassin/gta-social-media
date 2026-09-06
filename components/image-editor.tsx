'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import type { ImageEditorSaveResult } from '@unlayer/react-image-editor'

const UnlayerImageEditor = dynamic(
  () =>
    import('@unlayer/react-image-editor').then((module) => module.ImageEditor),
  {
    ssr: false,
  }
)

type ImageEditorProps = {
  src: string | undefined
  onSave?: (result: ImageEditorSaveResult) => void
  onCancel?: () => void
  onLoadError?: () => void
}

export function ImageEditor({
  src,
  onSave,
  onCancel,
  onLoadError,
}: ImageEditorProps) {
  const editorRef = useRef(null)

  useEffect(() => {
    const id = 'unlayer-phone-tweaks'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
      /* force editor to fill phone overlay height (was 500px default + flex quirks) */
      [id^="image-editor-"] { height: 100% !important; min-height: 0 !important; }
      [id^="image-editor-"] > div { height: 100% !important; min-height: 0 !important; flex: 1 1 0% !important; }
      /* narrower dock/rail when opened — Unlayer rail is ~64-72px by default */
      [id^="image-editor-"] [class*="dock"],
      [id^="image-editor-"] [class*="rail"],
      [id^="image-editor-"] [class*="sidebar"],
      [id^="image-editor-"] [class*="Sidebar"] {
        width: 52px !important;
        min-width: 52px !important;
        max-width: 52px !important;
      }
      /* fallback: first flex child is the rail when dock="left" */
      [id^="image-editor-"] > div > div:first-child {
        width: 52px !important;
        min-width: 52px !important;
        max-width: 52px !important;
      }
      /* smaller rail icons/buttons — ~15% smaller than already scaled */
      [id^="image-editor-"] button { padding: 5px !important; gap: 4px !important; }
      [id^="image-editor-"] svg { width: 16px !important; height: 16px !important; }
      [id^="image-editor-"] [class*="tool"] svg { width: 18px !important; height: 18px !important; }
    `
    document.head.appendChild(style)
  }, [])

  if (!src) return null

  return (
    <div className="flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-[#1a1a1a] [&>div]:!flex [&>div]:!h-full [&>div]:!min-h-0 [&>div]:flex-1">
      <UnlayerImageEditor
        ref={editorRef}
        image={src}
        minHeight={0}
        style={{ height: '100%', minHeight: 0, flex: 1, width: '100%' }}
        options={
          {
            theme: 'light',
            features: {
              imageEditor: {
                dock: 'left',
              },
            },
          } as never
        }
        onSave={onSave}
        onCancel={onCancel}
        onLoadError={onLoadError}
      />
    </div>
  )
}
