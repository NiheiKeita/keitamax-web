import React from 'react'
import Image from 'next/image'
import { Project } from '../types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  linkLabel?: string
  showStoreLinks?: boolean
  showTechStack?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  linkLabel,
  showStoreLinks = false,
  showTechStack = true
}) => {
  const label = linkLabel ?? 'プロジェクトを見る'
  const hasStoreLinks =
    !!project.appStoreUrl || !!project.googlePlayUrl || !!project.websiteUrl

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 24rem, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <h3 className="text-xl font-bold text-amber-900 transition-colors duration-200 group-hover:text-amber-700">
          {project.title}
        </h3>

        <p className="flex-1 leading-relaxed text-gray-600">
          {project.description}
        </p>

        {/* Tech Stack */}
        {showTechStack ? (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        {/* Link */}
        {showStoreLinks && hasStoreLinks ? (
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-2">
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
                    className="h-9 w-auto md:h-9"
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
                    className="h-9 w-auto md:h-9"
                  />
                </a>
              ) : null}
            </div>
            {project.websiteUrl ? (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-amber-700 bg-amber-900 px-2.5 py-1 text-xs font-semibold text-amber-50 shadow-sm transition-colors duration-200 hover:border-amber-800 hover:bg-amber-800"
              >
                <span>Webサイト</span>
                <ExternalLink className="size-4" />
              </a>
            ) : null}
          </div>
        ) : (
          <div className="pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-medium text-amber-700 transition-colors duration-200 hover:text-amber-900"
            >
              <span>{label}</span>
              <ExternalLink className="size-4" />
            </a>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      {/* <div className="absolute inset-0 bg-amber-900/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> */}
    </div>
  )
}

export default ProjectCard 
