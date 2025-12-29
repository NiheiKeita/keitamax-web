import React from 'react'
import Link from 'next/link'
import { Profile } from '../types'
import AnimatedSection from './AnimatedSection'

interface HeroSectionProps {
  profile: Profile
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-20 top-20 size-32 rounded-full bg-amber-700"></div>
        <div className="absolute right-32 top-40 size-24 rounded-full bg-amber-600"></div>
        <div className="absolute bottom-32 left-32 size-28 rounded-full bg-amber-800"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <AnimatedSection animation="slide-right" className="space-y-8">
            <AnimatedSection animation="fade-in" delay={200} className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-amber-900 lg:text-6xl">
                {profile.name}
              </h1>
              <h2 className="text-2xl font-medium text-amber-700 lg:text-3xl">
                {profile.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
                {profile.description}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={520} className="flex flex-wrap gap-4">
              <Link
                href="/apps"
                className="inline-flex items-center rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-amber-800"
              >
                Android / iOS アプリ一覧
              </Link>
            </AnimatedSection>

            {/* Skills */}
            <AnimatedSection animation="fade-in" delay={600} className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-900">技術スタック</h3>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <AnimatedSection key={index} animation="slide-up" delay={800 + index * 100}>
                    <span className="rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 transition-colors duration-200 hover:bg-amber-200">
                      {skill}
                    </span>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Profile Image */}
          <AnimatedSection animation="slide-left" delay={300} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="size-80 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 p-2">
                <div className="size-full overflow-hidden rounded-full bg-white">
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="size-full object-cover"
                    onError={(e) => {
                      // フォールバック画像
                      e.currentTarget.src = 'https://via.placeholder.com/320x320/8B4513/FFFFFF?text=keitaMax'
                    }}
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 size-8 rounded-full bg-amber-300"></div>
              <div className="absolute -bottom-4 -left-4 size-6 rounded-full bg-amber-400"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 
