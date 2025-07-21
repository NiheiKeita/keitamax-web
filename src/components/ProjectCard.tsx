import React from 'react'
import { Project } from '../types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x200/8B4513/FFFFFF?text=Project'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-amber-900 transition-colors duration-200 group-hover:text-amber-700">
          {project.title}
        </h3>

        <p className="leading-relaxed text-gray-600">
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
            <span>プロジェクトを見る</span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-amber-900/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  )
}

export default ProjectCard 