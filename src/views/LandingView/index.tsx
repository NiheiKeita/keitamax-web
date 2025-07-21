import React, { useEffect } from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import ProjectsSection from '../../components/ProjectsSection'
import Footer from '../../components/Footer'
import { profileData, projectsData, socialLinks } from '../../data/profile'

const LandingView: React.FC = () => {
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // スムーススクロールのためのCSS追加
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <Header onNavClick={handleNavClick} />

      <main>
        <HeroSection profile={profileData} />
        <ProjectsSection projects={projectsData} />
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  )
}

export default LandingView