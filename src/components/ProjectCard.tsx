import React from 'react'
import Image from 'next/image'
import { Project } from '../types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  linkLabel?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, linkLabel }) => {
  const label = linkLabel ?? 'プロジェクトを見る'

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

        {/* Link */}
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
      </div>

      {/* Hover overlay */}
      {/* <div className="absolute inset-0 bg-amber-900/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> */}
    </div>
  )
}

export default ProjectCard 
