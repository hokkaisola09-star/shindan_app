import { createContext, useState } from "react";
import { themeStyles } from "../theme";

const ThemeContext = createContext({});
export { ThemeContext };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        styles: themeStyles[theme],
        onThemeToggle: handleThemeToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
