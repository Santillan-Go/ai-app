import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function BtnGoToBottom({ scrollToBottom }) {
  return (
    <button
      onClick={() => scrollToBottom()}
      className="w-11 h-11 rounded-full text-5xl bg-slate-300 fixed right-5 bottom-24 sm:bottom-20 flex justify-center items-center"
    >
      <ExpandCircleDownIcon
        className="text-5xl font-bold text-black w-9 h-9"
        fontSize="inherit"
      />
    </button>
  );
}

export default BtnGoToBottom;
