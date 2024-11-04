"use client";
import { default as Link } from "next/link";

import SettingsIcon from "@mui/icons-material/Settings";
import useTheme from "@/HOOKS/useTheme";
function GoToConfig() {
  const Theme = useTheme();

  const getColorBG = () => {
    if (Theme.theme === "default")
      return "bg-gray-light bg-opacity-15 text-white backdrop-blur-md border border-white-10";
    if (Theme.theme === "blue fade")
      return "bg-gray-light bg-opacity-15 text-white backdrop-blur-md border border-white-10";
    if (Theme.theme === "dark mode") return " bg-gray-dark] ";
  };
  return (
    <Link
      href={"/config"}
      className={`${getColorBG()} rounded-full text-5xl flex justify-center items-center  h-12 w-12 `}
    >
      <SettingsIcon fontSize="inherit" />
    </Link>
  );
}

export default GoToConfig;
