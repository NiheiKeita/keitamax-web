import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Project } from '../../types'

interface LinkButtonsProps {
  project: Project
}

const LinkButtons: React.FC<LinkButtonsProps> = ({ project }) => {
  if (project.category === 'web') {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-turquoise px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-turquoise-dark"
      >
        <span>サイトを見る</span>
        <ExternalLink className="size-4" />
      </a>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.appStoreUrl ? (
        <a
          href={project.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 transition-transform duration-200 hover:scale-[1.02]"
        >
          <Image
            src="/logo/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
            alt="App Storeで入手"
            width={140}
            height={42}
            className="h-10 w-auto"
          />
        </a>
      ) : null}
      {project.googlePlayUrl ? (
        <a
          href={project.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 transition-transform duration-200 hover:scale-[1.02]"
        >
          <Image
            src="/logo/GetItOnGooglePlay_Badge_Web_color_Japanese.svg"
            alt="Google Playで手に入れよう"
            width={140}
            height={42}
            className="h-10 w-auto"
          />
        </a>
      ) : null}
      {project.websiteUrl ? (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-mint"
        >
          <span>Webサイト</span>
          <ExternalLink className="size-4" />
        </a>
      ) : null}
    </div>
  )
}

export default LinkButtons
