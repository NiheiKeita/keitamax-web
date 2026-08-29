import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Project } from '../../types'
import PlatformBadge, { Platform } from './PlatformBadge'

interface ProjectRowProps {
  project: Project
}

const getPlatforms = (project: Project): Platform[] => {
  const platforms: Platform[] = []

  if (project.techStack.includes('iOS')) platforms.push('ios')
  if (project.techStack.includes('Android')) platforms.push('android')
  if (project.category === 'web' || project.websiteUrl) platforms.push('web')

  return platforms
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  const platforms = getPlatforms(project)
  const categoryPath = project.category === 'app' ? 'apps' : 'web'
  const detailHref = project.detailSlug ? `/${categoryPath}/${project.detailSlug}` : undefined
  const externalHref = project.websiteUrl ?? project.link

  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-mint bg-white px-4 py-3 shadow-sm transition-colors duration-200 hover:border-turquoise hover:shadow-md">
      <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-mint">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="3rem"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-ink">{project.title}</p>
        <p className="truncate text-sm text-gray-500">{project.description}</p>
      </div>

      <div className="hidden shrink-0 items-center gap-1 sm:flex">
        {platforms.map((platform) => (
          <PlatformBadge key={platform} platform={platform} />
        ))}
      </div>

      <ChevronRight className="size-5 shrink-0 text-gray-400" />
    </div>
  )

  if (detailHref) {
    return (
      <Link href={detailHref} className="block">
        {content}
      </Link>
    )
  }

  return (
    <a href={externalHref} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  )
}

export default ProjectRow
