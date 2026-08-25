import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Project, ProjectDetail } from '../../types'
import Footer from '../Footer'
import { socialLinks } from '../../data/profile'
import LinkButtons from './LinkButtons'
import ScreenshotStrip from './ScreenshotStrip'

interface AppDetailPageProps {
  project: Project
  detail: ProjectDetail
}

const AppDetailPage: React.FC<AppDetailPageProps> = ({ project, detail }) => {
  const backHref = project.category === 'app' ? '/apps' : '/web'
  const backLabel = project.category === 'app' ? 'アプリ一覧へ戻る' : 'Web一覧へ戻る'

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-mint bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-ink">
            ケイタMax
          </Link>
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-turquoise"
          >
            <ArrowLeft className="size-4" />
            <span>{backLabel}</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-3xl bg-mint md:size-32">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="8rem"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink lg:text-4xl">{project.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">{project.description}</p>
            <div className="mt-6">
              <LinkButtons project={project} />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-4 text-xl font-bold text-ink">スクリーンショット</h2>
          <ScreenshotStrip title={project.title} screenshots={detail.screenshots} />
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold text-ink">特徴</h2>
            <ul className="space-y-3">
              {detail.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-turquoise" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-ink">技術スタック</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-mint bg-white px-3 py-1 text-xs font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-mint p-8">
          <h2 className="mb-3 text-xl font-bold text-ink">作った理由・こだわり</h2>
          <p className="leading-relaxed text-gray-700">{detail.note}</p>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  )
}

export default AppDetailPage
