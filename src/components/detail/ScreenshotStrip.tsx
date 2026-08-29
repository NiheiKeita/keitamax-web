import React from 'react'
import Image from 'next/image'

interface ScreenshotStripProps {
  title: string
  screenshots: string[]
}

const PLACEHOLDER_COUNT = 3

const ScreenshotStrip: React.FC<ScreenshotStripProps> = ({ title, screenshots }) => {
  if (screenshots.length === 0) {
    return (
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
          <div
            key={index}
            className="flex h-72 w-40 shrink-0 items-center justify-center rounded-3xl border-2 border-dashed border-mint bg-white text-sm text-gray-400"
          >
            Coming soon
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {screenshots.map((src, index) => (
        <div
          key={src}
          className="relative h-72 w-40 shrink-0 overflow-hidden rounded-3xl border border-mint bg-white shadow-md"
        >
          <Image
            src={src}
            alt={`${title} スクリーンショット ${index + 1}`}
            fill
            sizes="10rem"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default ScreenshotStrip
