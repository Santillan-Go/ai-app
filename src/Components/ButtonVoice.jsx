"use client";
import React from "react";
import MicIcon from "@mui/icons-material/Mic";
function ButtonVoice({ IsListening, toggleListening, disabled }) {
  return (
    <button
      type="button"
      onClick={toggleListening}
      disabled={disabled}
      className={`rounded-full bg-gray-medium  w-11 h-11 ${
        IsListening ? "listening-animation" : ""
      } self-end disabled:opacity-50`}
    >
      <MicIcon className="text-4xl font-bold text-black" />
    </button>
  );
}

export default ButtonVoice;

/*Now I want to allow the user to undo(control + z) but the text area doesn't allow that, What can i do to solve that?*/
