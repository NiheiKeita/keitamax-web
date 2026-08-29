import { ProjectDetail } from '../types'

// screenshots は未用意のため空配列にしている。画像を用意でき次第 public/projects/screenshots/ 配下に追加してここに列挙する。
export const projectDetails: ProjectDetail[] = [
  {
    slug: 'hitasura-math',
    screenshots: [],
    features: [
      '因数分解・素因数分解など反復練習向けの問題を多数収録',
      '解いた分だけ積み上がる、シンプルな練習台としての設計',
      'Web / iOS / Android のマルチプラットフォーム対応',
    ],
    note: '「解けば解くほど慣れる」を体験として作るために、余計な機能は足さずひたすら問題を解くことだけに画面を絞りました。数学の反復練習に特化したアプリとして、今後も問題の幅を広げていく予定です。',
  },
  {
    slug: 'hitasura-info',
    screenshots: [],
    features: [
      '情報Ⅰの問題を収録した反復練習アプリ',
      'ひたすら数学と同じ操作感で迷わず使える',
      'Web / iOS / Android のマルチプラットフォーム対応',
    ],
    note: '情報Ⅰが新設科目になったタイミングで、手を動かして覚えたい人向けの練習台として作りました。ひたすらシリーズと同じUIにすることで、乗り換えたときの学習コストをゼロに近づけています。',
  },
  {
    slug: 'kokoro-toilet',
    screenshots: [],
    features: [
      '傷ついた言葉を入力してトイレに流すインタラクション',
      '匿名で気軽に使えるシンプルなUI',
      'スマホでもPCでも同じ体験',
    ],
    note: '「言われてムカついた」「何気ない一言で凹んだ」というモヤモヤは、誰かに話すほどでもないけれど心には残ります。トイレに流すという行為に置き換えることで、感情の処理を軽くできないかと考えて作りました。',
  },
  {
    slug: 'anigraph',
    screenshots: [],
    features: [
      'シーズンごとのアニメをランキング形式で記録',
      '自分の評価の変化をグラフで可視化',
      'アニメ好き同士でランキングを見比べられる設計',
    ],
    note: '毎シーズン「今期一番良かったアニメ」を覚えていられないのがもったいなくて作りました。ランキングを記録として残し、グラフで変化を見られるようにすることで、後から見返す楽しさを重視しています。',
  },
]

export const getProjectDetail = (slug: string): ProjectDetail | undefined =>
  projectDetails.find((detail) => detail.slug === slug)
