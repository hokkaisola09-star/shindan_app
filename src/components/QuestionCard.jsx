import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const QuestionCard = ({ question }) => {
  const { styles } = useContext(ThemeContext);

  return (
    <div
      className={` ${styles.card} h-25.75 mb-8 px-7 py-1 rounded-xl drop-shadow-[0_8px_0]`}
    >
      <p className={styles.text}>{question.question}</p>
    </div>
  );
};
