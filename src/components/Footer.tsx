import React from 'react'
import { SocialLink } from '../types'
import { Coffee } from 'lucide-react'

interface FooterProps {
  socialLinks: SocialLink[]
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {

  return (
    <footer className="bg-amber-900 py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and Copyright */}
          <div className="mb-6 flex items-center space-x-2 md:mb-0">
            <Coffee className="size-6 text-amber-300" />
            <span className="text-xl font-bold">keitaMax</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 transition-colors duration-200 hover:text-white"
                aria-label={link.name}
              >
                <img src={link.icon} alt="Twitter" className="size-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-300">
            © 2025 keitaMax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 