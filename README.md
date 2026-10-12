# スルースキル診断 / 精神摩耗度診断

10 問の質問に答えるだけで、日常のストレスを「受け流す力」を診断する Web アプリです。
右上のボタンでテーマを切り替えると、**同じ質問でも「スルースキル診断」と「精神摩耗度診断」で見え方（文言・配色）が変わる** のが特徴です。

**Demo:** https://shindan-app-five.vercel.app/

## 機能

- 全 10 問・4 択の診断（回答ごとに 0〜3 点を加算し、合計 30 点満点）
- 合計点に応じた 4 段階の結果表示
- ライト / ダークのテーマ切り替え
  - 配色だけでなく、タイトル・導入文・結果文もテーマごとに別の文言を表示
- 結果画面から最初に戻ってやり直し

## 使用技術

| 分類         | 技術              |
| ------------ | ----------------- |
| UI           | React 19          |
| ビルド       | Vite              |
| スタイリング | Tailwind CSS v4   |
| 品質         | ESLint / Prettier |

## 工夫した点

- **画面遷移はルーターを使わず状態管理で実装**
  `currentIndex` 1 つで「開始 → 質問 → 結果」を切り替えています（`-1` が開始画面、質問数以上が結果画面）。
- **テーマの共通化**
  配色を `src/theme.js` に集約し、Context 経由で配ることで、各コンポーネントから `theme` の分岐を排除しました。
- **データと表示の分離**
  質問と結果の定義を表示コンポーネントから切り離し、props で渡す構成にしています。

## ディレクトリ構成

```
src/
├── App.jsx                  # 質問・結果データ、進行状態の管理
├── theme.js                 # テーマごとの配色定義
├── provider/
│   └── ThemeProvider.jsx    # テーマ状態の Context
└── components/
    ├── Layout.jsx
    ├── Header.jsx           # タイトル・テーマ切り替え
    ├── DiagnosisBoard.jsx   # 画面の出し分け
    ├── StartScreen.jsx
    ├── QuizScreen.jsx       # QuestionCard / ChoiceButton を内包
    └── ResultScreen.jsx
```

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド
npm run lint     # ESLint
```
