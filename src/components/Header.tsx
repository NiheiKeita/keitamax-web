import React, { useState, useEffect } from 'react'
import { Coffee } from 'lucide-react'

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  onNavClick: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 shadow-lg backdrop-blur-md'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="size-8 text-amber-700" />
            <span className="text-2xl font-bold text-amber-900">ケイタMax</span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => onNavClick('about')}
              className="font-medium text-amber-900 transition-colors duration-200 hover:text-amber-700"
            >
              自己紹介
            </button>
            <button
              onClick={() => onNavClick('projects')}
              className="font-medium text-amber-900 transition-colors duration-200 hover:text-amber-700"
            >
              作品一覧
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="text-amber-900 md:hidden">
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 