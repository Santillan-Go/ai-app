"use client";
import React from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useTheme from "@/HOOKS/useTheme";
function ButtonAdd({ handleTutor }) {
  const Theme = useTheme();

  const getColorBG = () => {
    if (Theme.theme === "default")
      return " bg-gray-light bg-opacity-15 text-white";
    if (Theme.theme === "blue fade")
      return "bg-gray-light bg-opacity-15 text-white";
    if (Theme.theme === "dark mode") return " text-white bg-gray-dark ";
  };
  return (
    <button
      className={`${getColorBG()} flex justify-center items-center text-6xl  rounded-full  outline-none border-none  fixed bottom-10px left-50% -translate-x-50% w-14 h-14 `}
      onClick={handleTutor}
    >
      <AddCircleOutlineIcon
        // width={"56px"}
        // height={"56px"}
        fontSize="inherit"
        className="w-full h-full font-bold text-3xl"
      />
    </button>
  );
}

export default ButtonAdd;
