"use client";

import { useAppSelector } from "@/store/store";

function useTheme() {
  const theme = useAppSelector((state) => state.ThemeRedux);

  const getThemeCss = () => {
    if (theme.theme === "default")
      return { bg: "default-bg", children: "bg-main-purple" };
    if (theme.theme === "dark mode")
      return { bg: "dark-mode-bg", children: "dark-mode-children" };

    if (theme.theme === "blue fade")
      return { bg: "blue-fade-bg", children: "blue-fade-bg" };
  };
  return {
    theme: theme.theme,
    ...getThemeCss(),
  };
}

export default useTheme;
