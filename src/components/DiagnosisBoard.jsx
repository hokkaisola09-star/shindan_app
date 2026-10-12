import { StartScreen } from "./StartScreen";
import { QuizScreen } from "./QuizScreen";
import { ResultScreen } from "./ResultScreen";

export const DiagnosisBoard = ({
  questions,
  results,
  currentIndex,
  score,
  onStart,
  onAnswer,
  onReset,
}) => {
  let openIndex;
  if (currentIndex === -1) {
    openIndex = 0;
  } else if (0 <= currentIndex && currentIndex < questions.length) {
    openIndex = 1;
  } else if (currentIndex >= questions.length) {
    openIndex = 2;
  }

  return (
    <div className="flex flex-col items-center w-9/10">
      {openIndex === 0 && <StartScreen onStart={onStart} />}
      {openIndex === 1 && (
        <QuizScreen
          question={questions[currentIndex]}
          current={currentIndex + 1}
          total={questions.length}
          onAnswer={onAnswer}
        />
      )}
      {openIndex === 2 && (
        <ResultScreen results={results} score={score} onReset={onReset} />
      )}
    </div>
  );
};
