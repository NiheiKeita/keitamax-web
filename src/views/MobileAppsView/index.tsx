import React from 'react'
import Link from 'next/link'
import { Coffee } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import ProjectCard from '../../components/ProjectCard'
import Footer from '../../components/Footer'
import { projectsData, socialLinks } from '../../data/profile'

const MobileAppsView: React.FC = () => {
  const mobileApps = projectsData.filter((project) =>
    project.techStack.some((tech) => tech === 'Android' || tech === 'iOS')
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-2 text-amber-900">
            <Coffee className="size-7 text-amber-700" />
            <span className="text-xl font-bold">ケイタMax</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-amber-200 px-4 py-2 text-sm font-medium text-amber-800 transition-colors duration-200 hover:border-amber-300 hover:text-amber-900"
          >
            トップへ戻る
          </Link>
        </div>
      </header>

      <main className="pb-20 pt-12">
        <section className="container mx-auto px-6">
          <AnimatedSection animation="fade-in" className="text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700">
              APP DIRECTORY
            </p>
            <h1 className="mb-4 text-4xl font-bold text-amber-900 lg:text-5xl">
              Android / iOS アプリ一覧
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              各アプリから移動できるように、AndroidとiOS向けのアプリをまとめています。
              気になるアプリがあればストアリンクからチェックしてみてください。
            </p>
            <div className="mt-6 text-sm font-medium text-amber-800">
              公開中のアプリ: {mobileApps.length} 件
            </div>
          </AnimatedSection>
        </section>

        <section className="container mx-auto mt-16 px-6">
          {mobileApps.length === 0 ? (
            <div className="rounded-2xl border border-amber-100 bg-white/80 p-10 text-center text-amber-900 shadow-sm">
              現在公開中のアプリは準備中です。もう少しお待ちください。
            </div>
          ) : (
            <div className="grid auto-rows-fr gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mobileApps.map((project) => (
                <AnimatedSection key={project.id} animation="slide-up" className="h-full">
                  <ProjectCard project={project} linkLabel="ストアで見る" />
                </AnimatedSection>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  )
}

export default MobileAppsView
