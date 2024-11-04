"use client";

import useLanguage from "@/HOOKS/useLanguage";
import useTheme from "@/HOOKS/useTheme";
import { useEffect, useRef } from "react";

function ModalChange({ Submit, value, show, Change, hidden }) {
  const language = useLanguage();
  const inputRef = useRef(null);
  const Theme = useTheme();

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  // const getColorBG = () => {
  //   if (Theme.theme === "default") return "gradient-container ";
  //   if (Theme.theme === "blue fade") return "blue-fade-bg ";
  //   if (Theme.theme === "dark mode") return "  ";
  // };

  const getTextColor = () => {
    if (Theme.theme === "default") return "hover:text-main-purple";

    if (Theme.theme === "blue fade") return "hover:text-blue-900";

    if (Theme.theme === "dark mode") return "hover:text-gray-600";
  };
  return (
    <div className={`background-modal ${show ? "block" : "hidden"}`}>
      <form
        onSubmit={Submit}
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4 w-80 p-4 rounded-3xl   bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10  text-main-white font-bold   `}
      >
        <input
          type="text"
          ref={inputRef}
          className="w-full p-1 text-2xl text-black"
          name="name"
          onChange={Change}
          value={value}
        />
        <input
          type="submit"
          className={`bg-main-white rounded-3xl text-black  hover:font-bold text-2xl  hover:cursor-pointer ${getTextColor()}`}
          value={language.modalChange.buttonText1}
        ></input>

        <button
          type="button"
          onClick={hidden}
          className={`${Theme.theme == "blue fade" && "text-white"}`}
        >
          {language.modalChange.buttonText2}
        </button>
      </form>
    </div>
  );
}

export default ModalChange;
