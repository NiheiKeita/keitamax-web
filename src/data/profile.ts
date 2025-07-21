import { Profile, Project, SocialLink } from '../types'

export const profileData: Profile = {
  name: 'keitaMax',
  title: 'フルスタックエンジニア',
  description: 'Webアプリケーション開発に情熱を注ぐフルスタックエンジニアです。TypeScript、React、Next.jsを中心としたモダンな技術スタックで、ユーザー体験を重視したアプリケーションを開発しています。カフェでコーヒーを飲みながらコードを書くのが至福の時間です。',
  skills: ['TypeScript', 'React', 'Next.js', 'Firebase', 'Laravel', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
  imageUrl: '/profile.jpg' // 後で画像を追加
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'keitamax-web',
    description: 'カフェ風デザインの自己紹介サイト。Next.jsとTailwindCSSで構築されたモダンなポートフォリオ。',
    imageUrl: '/projects/keitamax-web.jpg',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: 'https://github.com/keitamax/keitamax-web'
  },
  {
    id: '2',
    title: 'カフェ管理システム',
    description: 'カフェの在庫管理と売上分析を行うWebアプリケーション。',
    imageUrl: '/projects/cafe-management.jpg',
    techStack: ['Laravel', 'Vue.js', 'MySQL'],
    link: 'https://github.com/keitamax/cafe-management'
  },
  {
    id: '3',
    title: 'タスク管理アプリ',
    description: 'シンプルで使いやすいタスク管理アプリ。Firebaseでリアルタイム同期。',
    imageUrl: '/projects/task-app.jpg',
    techStack: ['React', 'Firebase', 'TypeScript'],
    link: 'https://github.com/keitamax/task-app'
  }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/keitamax',
    icon: 'github'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/keitamax',
    icon: 'twitter'
  },
  {
    name: 'ブログ',
    url: 'https://blog.keitamax.dev',
    icon: 'blog'
  }
] 