# ☕ keitaMax - カフェ風自己紹介サイト

[![codecov](https://codecov.io/gh/NiheiKeita/next-example-app/graph/badge.svg?token=MY9YAIW9F6)](https://codecov.io/gh/NiheiKeita/next-example-app)

## 🎯 概要

スターバックスのような落ち着いた上質さをテーマにした、カフェ風の自己紹介サイトです。
Next.js + TypeScript + TailwindCSSで構築され、モダンでエレガントなデザインを実現しています。

## ✨ 特徴

- **カフェ風デザイン**: アンバー、ブラウン系の温かみのある配色
- **レスポンシブ対応**: スマートフォン、タブレット、PCに最適化
- **スムースアニメーション**: スクロール連動の美しいアニメーション効果
- **モダン技術スタック**: Next.js、TypeScript、TailwindCSS
- **1ページ完結**: シンプルで見やすい構成

## 🛠 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: TailwindCSS
- **アイコン**: Lucide React
- **フォント**: Playfair Display, Poppins, Noto Sans JP
- **ホスティング**: Vercel（推奨）

## 🚀 セットアップ

### 必要な環境

- Node.js 18.0.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 📁 プロジェクト構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── Header.tsx      # ヘッダーコンポーネント
│   ├── HeroSection.tsx # ヒーローセクション
│   ├── ProjectCard.tsx # プロジェクトカード
│   ├── ProjectsSection.tsx # プロジェクト一覧
│   ├── Footer.tsx      # フッターコンポーネント
│   └── AnimatedSection.tsx # アニメーション用コンポーネント
├── data/               # データファイル
│   └── profile.ts      # プロフィール・プロジェクトデータ
├── types/              # TypeScript型定義
│   └── index.ts        # 共通型定義
├── styles/             # スタイルファイル
│   └── globals.css     # グローバルスタイル
└── views/              # ページビュー
    └── LandingView/    # メインページ
```

## 🎨 カスタマイズ

### プロフィール情報の変更

`src/data/profile.ts`を編集して、以下の情報を更新してください：

- 名前、肩書き、自己紹介文
- 技術スタック
- プロジェクト情報
- SNSリンク

### 画像の追加

以下の画像を`public/`ディレクトリに配置してください：

- `profile.jpg` - プロフィール画像（400x400px以上推奨）
- `projects/keitamax-web.jpg` - プロジェクトサムネイル
- `projects/cafe-management.jpg` - プロジェクトサムネイル
- `projects/task-app.jpg` - プロジェクトサムネイル

### デザインのカスタマイズ

- `tailwind.config.ts` - カラーパレット、アニメーション設定
- `src/styles/globals.css` - グローバルスタイル、カスタムクラス

## 📱 レスポンシブ対応

- **モバイル**: 1列レイアウト
- **タブレット**: 2列レイアウト
- **デスクトップ**: 3列レイアウト

## 🎭 アニメーション

- **フェードイン**: 要素の表示
- **スライドアップ**: 下から上への移動
- **スライド左右**: 左右からの移動
- **ホバーエフェクト**: カードの浮き上がり効果

## 🌐 デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelに接続
2. 自動デプロイが有効になります

### その他のプラットフォーム

```bash
# ビルド
npm run build

# 静的ファイルの生成
npm run export
```

## 📄 ライセンス

MIT License

## ☕ 作者

keitaMax - フルスタックエンジニア

---

*Made with ☕ and ❤️*
