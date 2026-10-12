import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./provider/ThemeProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { DiagnosisBoard } from "./components/DiagnosisBoard";

const questions = [
  {
    id: 1,
    question:
      "好きな人にメッセージを送ってから数時間。既読はついているのに返信がないとき、あなたの心境や行動は？",
    choices: [
      { text: "「忙しいのかな」と気にせず自分の時間を楽しむ", point: 3 },
      {
        text: "「嫌われたかも」と不安になり、何度もスマホを確認してしまう",
        point: 1,
      },
      { text: "返信が来ないことにイライラし、何も手につかなくなる", point: 0 },
      { text: "なぜ返信がないのか少し気になってしまう", point: 2 },
    ],
  },
  {
    id: 2,
    question:
      "職場や家族が明らかに不機嫌な態度をとっているとき、あなたはどのように対応しますか？",
    choices: [
      {
        text: "自分のせいではないかと気になってしまい、ご機嫌取りをしてしまう",
        point: 1,
      },
      {
        text: "相手のピリピリした空気に巻き込まれて自分までイライラしてしまう",
        point: 0,
      },
      { text: "「そういう日もあるさ」と割り切り、一定の距離を保つ", point: 3 },
      { text: "理由を聞き出そうとしたり、少し気遣ったりする", point: 2 },
    ],
  },
  {
    id: 3,
    question:
      "SNSで自分の意見や投稿に、的外れな批判コメントが来たとき、あなたの初期対応は？",
    choices: [
      {
        text: "「いろんな人がいるな」と受け流し、ミュートやブロックを活用する",
        point: 3,
      },
      { text: "自分の意見が間違っていたのかと少し落ち込んでしまう", point: 2 },
      { text: "ショックすぎて、しばらくSNSを開けなくなる", point: 0 },
      { text: "カッとなって言い返し、不毛な論争を始めてしまう", point: 1 },
    ],
  },
  {
    id: 4,
    question:
      "職場の同僚や知人が、自分の悪口や陰口を言っているのを小耳に挟んでしまいました。あなたはどうしますか？",
    choices: [
      {
        text: "「言いたい人には言わせておく」と聞き流し、自分の仕事に集中する",
        point: 3,
      },
      { text: "深く傷ついてしまい、少しの間引きずってしまう", point: 2 },
      {
        text: "自分のせいで嫌われていると思い込み、会社に行きたくなくなる",
        point: 0,
      },
      {
        text: "陰口を言っている相手を恨んだり、別の人に悪口を言い返したくなる",
        point: 1,
      },
    ],
  },
  {
    id: 5,
    question:
      "知人があなたの恋愛やプライベートについて根掘り葉掘り聞き出し、余計なアドバイスをしてくるときは？",
    choices: [
      {
        text: "プライベートに踏み込まれたことに激怒し、言い争いになる",
        point: 0,
      },
      { text: "面倒くさくなり、その場から逃げ出すように立ち去る", point: 2 },
      {
        text: "アドバイスを真に受けてしまい、どうすればいいか悩んでしまう",
        point: 1,
      },
      {
        text: "「ありがとうございます」と笑顔で受け流し、サッと話題を変える",
        point: 3,
      },
    ],
  },
  {
    id: 6,
    question:
      "顧客や上司から、明らかに理不尽な要求やクレームを受けたとき、あなたの心境や行動は？",
    choices: [
      {
        text: "仕事と割り切り、感情を切り離して冷静かつ機械的に処理する",
        point: 3,
      },
      {
        text: "全て自分が悪いのだと抱え込み、過剰に責任を感じてしまう",
        point: 2,
      },
      {
        text: "人格を否定されたように感じてしまい、ひどく落ち込んでしまう",
        point: 1,
      },
      {
        text: "感情的になり、反論したり言い合いになったりする",
        point: 0,
      },
    ],
  },
  {
    id: 7,
    question:
      "友人の昇進や結婚などを聞いて、自分と比べてしまい焦りを感じたとき、あなたはどうしますか？",
    choices: [
      {
        text: "自分も負けじと、無理をして見栄を張った行動をしてしまう",
        point: 0,
      },
      {
        text: "「自分はなんてダメな人間なんだ」と深く落ち込んでしまう",
        point: 1,
      },
      {
        text: "相手の成功を妬んでしまい、しばらく距離を置きたくなる",
        point: 2,
      },
      {
        text: "「自分には自分のペースがある」と他人の成功を一旦切り離す",
        point: 3,
      },
    ],
  },
  {
    id: 8,
    question:
      "自分のキャパシティを明らかに超えている仕事を頼まれたとき、どのように対応しますか？",
    choices: [
      {
        text: "引き受けた後、裏でその仕事や頼んできた人の文句を言ってしまう",
        point: 2,
      },
      {
        text: "怒られるのが怖くて、言い訳をたくさん並べてしまう",
        point: 1,
      },
      {
        text: "「今の状況では引き受けられないので」と理由を添えてハッキリ伝える",
        point: 3,
      },
      {
        text: "断れずに引き受けてしまい、結局自分がパンクして苦しむ",
        point: 0,
      },
    ],
  },
  {
    id: 9,
    question:
      "SNSで友人の充実した投稿ばかりを見て、なんだか疲れてしまったとき、どうしますか？",
    choices: [
      {
        text: "「自分はなんて孤独なんだ」と悲観的になり、さらに投稿を見続けてしまう",
        point: 1,
      },
      {
        text: "投稿を逐一チェックし、心の中で粗探しをしてしまう",
        point: 2,
      },
      {
        text: "原因から物理的に距離を置き、スマホを置いてデジタルデトックスをする",
        point: 3,
      },
      {
        text: "自分も負けじと、無理をして充実しているような投稿をする",
        point: 0,
      },
    ],
  },
  {
    id: 10,
    question:
      "大きなミスをしてしまい、注意や叱責を受けたとき、あなたの心の回復力は？",
    choices: [
      {
        text: "反省は次に活かし、いつまでもクヨクヨせず前を向く",
        point: 3,
      },
      {
        text: "怒られたショックが大きく、何日も同じ失敗を思い出して落ち込む",
        point: 2,
      },
      {
        text: "「あの人の教え方が悪かったからだ」と誰かのせいにしてしまう",
        point: 0,
      },
      {
        text: "「自分は本当にダメな人間だ」と自信を完全に喪失してしまう",
        point: 1,
      },
    ],
  },
];

const results = [
  {
    min: 0,
    max: 7,
    label: "あなたの心は、お豆腐メンタル！",
    description:
      "スルースキルがほぼ機能していません。他人の不機嫌やSNSの批判をすべて「自分のせい？」と真に受けてしまい、心がヘトヘトに消耗しています。",
    darkLabel: "摩耗度MAX！心はボロボロ寸前です",
    darkDescription:
      "他人の言葉や空気をすべて真正面から受け止め、心がすり減りきっています。自分では気づかないうちに限界が近づいているかもしれません。まずはしっかり休んでください。",
  },
  {
    min: 8,
    max: 15,
    label: "あなたは、まじめな抱え込み予備軍！",
    description:
      "表向きは受け流している風を装いつつも、家に帰ってから「あの一言どういう意味だったんだろう…」と悩んでしまう、無理をしがちな状態です。",
    darkLabel: "摩耗度高め！じわじわ削られ中です",
    darkDescription:
      "表面上は平気そうでも、家に帰ってから一人で反芻して疲れが溜まっています。気づかないうちに心がすり減り続けている状態です。早めのケアを心がけましょう。",
  },
  {
    min: 16,
    max: 23,
    label: "あなたは、大人の受け流し上手！",
    description:
      "必要なアドバイスは聞き入れ、不要な愚痴や悪意は綺麗にシャットアウトできる理想的な状態です。人間関係のストレスが少ないタイプ。",
    darkLabel: "摩耗度は低め。ほどよく保てています",
    darkDescription:
      "多少のストレスはあっても回復できているので、大きくすり減ることはありません。今のペースを保ちつつ、疲れたときは無理せず休みましょう。",
  },
  {
    min: 24,
    max: 30,
    label: "あなたは、神スルースキルの持ち主！",
    description:
      "他人の感情やネガティブな情報に一切振り回されず、自分軸で生きられています。ストレスを全く溜め込まない最強のメンタルです。",
    darkLabel: "摩耗度ほぼゼロ！鋼のメンタルです",
    darkDescription:
      "他人の感情やネガティブな出来事にほとんど削られず、心がほぼ無傷の状態です。ストレスを溜め込まない、最強のメンタルの持ち主です。",
  },
];
const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [score, setScore] = useState(0);

  const onStart = () => setCurrentIndex(0);

  const onAnswer = (index) => {
    setScore((prev) => prev + questions[currentIndex].choices[index].point);
    setCurrentIndex((prev) => prev + 1);
  };

  const onReset = () => {
    setScore(0);
    setCurrentIndex(-1);
  };

  const { styles } = useContext(ThemeContext);

  return (
    <div className={`${styles.page} flex justify-center duration-300`}>
      <Layout>
        <Header />
        <DiagnosisBoard
          questions={questions}
          results={results}
          currentIndex={currentIndex}
          score={score}
          onStart={onStart}
          onAnswer={onAnswer}
          onReset={onReset}
        />
      </Layout>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
