import React from 'react'
import { Project } from '../types'
import ProjectCard from './ProjectCard'
import AnimatedSection from './AnimatedSection'

interface ProjectsSectionProps {
  projects: Project[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-amber-50 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-in" className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-amber-900 lg:text-5xl">
            アプリ紹介
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            これまでに開発したアプリを一部ご紹介します。使っていただけると嬉しいです。
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="slide-up" delay={index * 100} className="h-full">
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in" delay={800} className="mt-16 text-center">
          <p className="mb-6 text-gray-600">
            より多くのプロジェクトをご覧になりたい方は、GitHubをご確認ください。
          </p>
          <a
            href="https://github.com/NiheiKeita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-amber-700 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-amber-800 hover:shadow-xl"
          >
            <span>GitHubで見る</span>
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default ProjectsSection 