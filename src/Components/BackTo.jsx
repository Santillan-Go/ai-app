"use client";

import Link from "next/link";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import useTheme from "@/HOOKS/useTheme";

function BackTo({ LINK }) {
  const Theme = useTheme();

  const getColorText = () => {
    if (Theme.theme === "default") return "gradient-container rounded-full";
    if (Theme.theme === "blue fade") return "bg-blue-900 rounded-full";
    if (Theme.theme === "dark mode") return " bg-gray-dark rounded-full";
  };
  return (
    <Link
      className={`${getColorText()} w-11 h-11 flex justify-center items-center`}
      href={LINK}
    >
      <ArrowCircleLeftIcon className="w-9 h-9  text-white " />
    </Link>
  );
}

export default BackTo;
