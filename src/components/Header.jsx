import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const Header = () => {
  const { theme, styles, onThemeToggle } = useContext(ThemeContext);

  return (
    <header
      className={`${styles.header} flex justify-center items-center w-full h-24.25 gap-x-16 border-b-16 rounded-b-[40px]`}
    >
      <h1 className={`${styles.text} w-[8em] text-center text-2xl font-bold`}>
        {theme === "light" ? "スルースキル診断" : "精神摩耗度診断"}
      </h1>
      <button
        onClick={onThemeToggle}
        aria-label={
          theme === "light"
            ? "ダークモードに切り替え"
            : "ライトモードに切り替え"
        }
        className={`${styles.toggle} w-12 h-12 rounded-full drop-shadow-[0_4px_1px]`}
      ></button>
    </header>
  );
};
