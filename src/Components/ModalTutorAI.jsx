"use client";

import useLanguage from "@/HOOKS/useLanguage";
import { useTheme } from "@emotion/react";
import { useEffect, useRef } from "react";

function ModalTutorAI({ Change, Submit, tutor, handleModal, modal, colorBG }) {
  const language = useLanguage();
  const inputRef = useRef(null);

  useEffect(() => {
    if (modal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modal]);

  /*
   backdrop-blur-md border border-white/10 rounded-lg p-4 */
  return (
    <div className={`background-modal ${modal ? `` : "hidden"} `}>
      <form
        onSubmit={Submit}
        className={`  ${colorBG()}  w-80 h-64   text-main-white flex flex-col gap-4 p-4  fixed top-1/3 left-1/2 
    translate-x-[-50%] backdrop-blur-md border border-white/10 rounded-3xl `}
      >
        <input
          type="text"
          autoFocus
          ref={inputRef}
          onChange={Change}
          value={tutor}
          className="outline-none rounded-3xl p-2 pl-2 text-black font-medium bg-slate-200"
        />
        <input
          type="submit"
          value={language.modalCreate.buttonText1}
          className="bg-slate-100 text-black hover:cursor-pointer hover:bg-slate-300 font-bold rounded-2xl text-2xl"
        />
        <button
          onClick={handleModal}
          type="button"
          className="bg-slate-100 rounded-2xl hover:bg-slate-300 text-black font-bold text-2xl"
        >
          {language.modalCreate.buttonText2}
        </button>
      </form>
    </div>
  );
}

export default ModalTutorAI;
