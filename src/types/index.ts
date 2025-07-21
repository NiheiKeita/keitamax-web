export interface Profile {
  name: string
  title: string
  description: string
  skills: string[]
  imageUrl: string
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  link: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
} 