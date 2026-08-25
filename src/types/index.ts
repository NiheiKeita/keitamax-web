export interface Profile {
  name: string
  title: string
  description: string
  skills: string[]
  imageUrl: string
}

export type ProjectCategory = 'app' | 'web'

export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  techStack: string[]
  link: string
  appStoreUrl?: string
  googlePlayUrl?: string
  websiteUrl?: string
  category: ProjectCategory
  /** 専用ページ(/apps/[slug] または /web/[slug])を持つ場合のみ設定 */
  detailSlug?: string
  /** シリーズでまとめる場合(例: 'hitasura') */
  seriesId?: string
}

export interface ProjectDetail {
  slug: string
  /** 未用意の場合は空配列。ScreenshotStripはプレースホルダー表示する */
  screenshots: string[]
  features: string[]
  /** 「作った理由・こだわり」 */
  note: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
