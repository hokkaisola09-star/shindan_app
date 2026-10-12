import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { QuestionCard } from "./QuestionCard";
import { ChoiceButton } from "./ChoiceButton";

export const QuizScreen = ({ question, current, total, onAnswer }) => {
  const { styles } = useContext(ThemeContext);

  return (
    <div className="w-full mt-8">
      <p className={`${styles.text} mb-3 text-center text-[20px] font-medium`}>
        {current} / {total}
      </p>
      <QuestionCard question={question} />
      <ChoiceButton question={question} onAnswer={onAnswer} />
    </div>
  );
};
