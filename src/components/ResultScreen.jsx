import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const ResultScreen = ({ results, score, onReset }) => {
  const { theme, styles, onThemeToggle } = useContext(ThemeContext);

  let result;

  if (score >= results[0].min && score <= results[0].max) {
    result = results[0];
  } else if (score >= results[1].min && score <= results[1].max) {
    result = results[1];
  } else if (score >= results[2].min && score <= results[2].max) {
    result = results[2];
  } else if (score >= results[3].min && score <= results[3].max) {
    result = results[3];
  }
  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <div
        className={`${styles.card} ${styles.text} w-full h-50 rounded-xl border-4 drop-shadow-[0_8px_0]`}
      >
        <div className="text-center py-7 text-[16px] font-medium leading-10 tracking-[0.6px]">
          <h2 className="">
            {theme === "light" ? result.label : result.darkLabel}
          </h2>
        </div>
        <div className="px-5 text-[14px] leading-5">
          <p>
            {theme === "light" ? result.description : result.darkDescription}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          onReset();
          onThemeToggle();
        }}
        className={`${styles.card} ${styles.text} mt-8 w-75 h-17 text-center text-[20px] rounded-[40px] border-4 drop-shadow-[0_8px_2px]`}
      >
        もう一度診断する
      </button>
    </div>
  );
};
