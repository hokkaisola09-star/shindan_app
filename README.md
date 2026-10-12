# スルースキル診断 / 精神摩耗度診断

10問の質問に答えて、日常のストレスを「受け流す力」を診断するWebアプリです。
右上のボタンでテーマを切り替えると、同じ質問でも「スルースキル診断」と「精神摩耗度診断」で、配色も文言も変わります。
公開URL: https://shindan-app-five.vercel.app/

## 使っている技術

- React 19 / JavaScript
- Vite
- Tailwind CSS v4
- ESLint / Prettier
- Vercel(ホスティング)

## 構成

```
src/
  App.jsx                  質問・結果のデータ、進行状態(currentIndex / score)の管理
  theme.js                 ライト・ダークごとの配色クラス名の定義
  provider/
    ThemeProvider.jsx      テーマの状態と配色を Context で配る
  components/
    Layout.jsx             全体の枠(背景・幅)
    Header.jsx             タイトルとテーマ切り替えボタン
    DiagnosisBoard.jsx     開始・質問・結果の画面を出し分ける
    StartScreen.jsx        開始画面
    QuizScreen.jsx         質問画面(QuestionCard と ChoiceButton を含む)
    QuestionCard.jsx       質問文の表示
    ChoiceButton.jsx       4つの選択肢ボタン
    ResultScreen.jsx       結果画面
```

## 処理の流れ

```
開始画面 ── onStart ──→ 質問画面(10問) ── onAnswer ──→ 結果画面 ── onReset ──→ 開始画面
 currentIndex = -1       0 〜 9                          10 以上
```

1. `App.jsx` が `currentIndex`(今何問目か)と `score`(合計点)を `useState` で持つ。
2. 開始ボタンで `currentIndex` を 0 にし、選択肢を押すたびに、その選択肢の `point` を `score` に足して `currentIndex` を進める。
3. `DiagnosisBoard` が `currentIndex` を見て、開始・質問・結果のどれを表示するか決める。
4. 結果画面は `score` が当てはまる範囲(0〜7 / 8〜15 / 16〜23 / 24〜30)の結果を表示する。

## 設計判断・苦労した点の記録

### 配色を `theme.js` に1か所にまとめた

- 配色を `theme.js` のオブジェクトにまとめ、Provider が現在のテーマの配色を `styles` として配る形にした。
- 文言の出し分け(タイトル・導入文・結果文)には、文字列の `theme` も使う。

### Tailwind は動的にクラス名を組み立てられない

- Tailwind はソースコード中の完成した文字列を探してCSSを作る。`` `bg-[${color}]` `` のような組み立てでは CSS が作られない。
- そのため、`theme.js` には `"bg-[#FCFFF8] border-[#FFF8DD] ..."` のように、完成したクラス名をそのまま書いた。

### テーマを切り替えると、中身も変わるようにした

- ライトは「スルースキル診断」、ダークは「精神摩耗度診断」として、タイトル・導入文・結果の見出しと説明を、それぞれ別の文言で用意した。
- 同じ点数でも、見る角度(受け流す力 / すり減り具合)によって受け取り方が変わる、という切り口で作った。
- 「もう一度診断する」を押すと、リセットと同時にテーマも反転する。やり直すたびに、もう一方の見方で診断結果が見られる。

## 開発

```
npm install
npm run dev
```

http://localhost:5173 を開く。

```
npm run build   # 本番ビルド
npm run lint    # ESLint
```
