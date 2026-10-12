import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const ChoiceButton = ({ question, onAnswer }) => {
  const { styles } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center gap-y-4 mb-5">
      {question.choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index)}
          className={`${styles.card} ${styles.text} w-75 h-17 px-7 text-center text-[13px] rounded-[40px] border-4 drop-shadow-[0_8px_2px]`}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};
