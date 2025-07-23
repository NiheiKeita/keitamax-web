import { Profile, Project, SocialLink } from '../types'

export const profileData: Profile = {
  name: 'ケイタMax',
  title: 'WebAPP開発エンジニア',
  description: 'Webアプリケーション開発に情熱を注ぐエンジニアです。Laravel、PHP, TypeScript、React、Next.jsを中心とした技術を使用してアプリケーションを開発しています。カフェでコーヒーを飲みながらアプリ作成するのが好きです。',
  skills: ['TypeScript', 'React', 'Next.js', 'Firebase', 'Laravel', 'PHP', 'TailwindCSS', 'Node.js', 'Android', 'Kotlin', 'PostgreSQL'],
  imageUrl: '/profile.png' // 後で画像を追加
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: '心のトイレ',
    description: '日々の仕事や人間関係の中で、ふと傷ついた「言葉」って、案外ずっと心に残りませんか？「言われてムカついた」「何気ない一言で凹んだ」そういったモヤモヤを、トイレに流してスッキリするWebサービスです。',
    imageUrl: '/projects/toilet.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
    link: 'https://throw-toilet.qboad.com/'
  },
  {
    id: '2',
    title: 'たんこまゃんサイト',
    description: 'たんこまゃんの公式サイトです。アンドウさんなどのキャラクターの説明、Lineスタンプのリンクをまとめています。',
    imageUrl: '/projects/tankomayann.png',
    techStack: ['Nuxt', 'Vue.js', 'TailwindCSS'],
    link: 'https://tankomayan.qboad.com/'
  },
  {
    id: '3',
    title: 'アジャイル便利アプリ',
    description: 'アジャイルをする上で便利なツールを作成しています。プランニングポーカーなどができます。今後、チームでの進捗管理などもできるようにしていきます。',
    imageUrl: '/projects/agile.png',
    techStack: ['Next.js', 'Skyway', 'TypeScript', 'TailwindCSS'],
    link: 'https://agile.qboad.com/'
  },
  {
    id: '4',
    title: 'あにぐらふ',
    description: 'アニメのランキングを作成し、シーズンごとのアニメをチェックして、自分のランキングの変化をグラフで楽しめるWEBサイトです。',
    imageUrl: '/projects/anigraph.png',
    techStack: ['Laravel', 'Next.js', 'TypeScript', 'TailwindCSS', 'Firebase'],
    link: 'https://anigraph.qboad.com/'
  },
  {
    id: '5',
    title: 'ケイタMaxの冒険',
    description: 'ケイタMaxを操作してボスを倒すことを目指すRPGです。結構難しいです。',
    imageUrl: '/projects/keitamax_rpg.png',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    link: 'https://niheikeita.github.io/my-site/'
  },
  {
    id: '6',
    title: 'ひたすら因数分解(Android)',
    description: 'ひたすら因数分解を解くAndroidアプリです。',
    imageUrl: '/projects/innsuubunkai.webp',
    techStack: ['Android', 'Kotlin'],
    link: 'https://play.google.com/store/apps/details?id=com.iggyapp.insuubunkai&hl=ja'
  },
  {
    id: '7',
    title: 'ひたすら素因数分解(Android)',
    description: 'ひたすら素因数分解を解くAndroidアプリです。',
    imageUrl: '/projects/soinnsuubunkai.webp',
    techStack: ['Android', 'Kotlin'],
    link: 'https://play.google.com/store/apps/details?id=com.iggyapp.soinnsuubunnkai&hl=ja'
  },
  {
    id: '8',
    title: 'ひたすら微分(Android)',
    description: 'ひたすら微分を解くAndroidアプリです。',
    imageUrl: '/projects/bibunn.webp',
    techStack: ['Android', 'Kotlin'],
    link: 'https://play.google.com/store/apps/details?id=com.iggyapp.bibunn&hl=ja'
  },
  {
    id: '9',
    title: 'ひたすら積分(Android)',
    description: 'ひたすら積分を解くAndroidアプリです。',
    imageUrl: '/projects/sekibun.webp',
    techStack: ['Android', 'Kotlin'],
    link: 'https://play.google.com/store/apps/details?id=com.iggyapp.sekibunn&hl=ja'
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/NiheiKeita/',
    icon: '/logo/github-mark-white.svg'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/keita__Max',
    icon: '/logo/twitter.svg'
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/keitaMax',
    icon: '/logo/qiita-icon.png'
  }
] 