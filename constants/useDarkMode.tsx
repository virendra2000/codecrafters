import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function useDarkMode(): [Theme, React.Dispatch<React.SetStateAction<Theme>>] {
  const [theme, setTheme] = useState<Theme>(
    (typeof window !== "undefined" ? localStorage.theme : "dark") as Theme
  );
  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;