import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

export const Layout = ({ children }) => {
  const { styles } = useContext(ThemeContext);

  return (
    <main
      className={` ${styles.layout} flex flex-col items-center w-93.75 min-h-screen pb-15 duration-300`}
    >
      {children}
    </main>
  );
};
