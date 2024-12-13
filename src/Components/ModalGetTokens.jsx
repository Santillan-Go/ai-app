"use client";
import React, { useState } from "react";
import GoToPlan from "./GoToPlan";
import CloseIcon from "@mui/icons-material/Close";
import useLanguage from "@/HOOKS/useLanguage";
function ModalGetTokens({ from, handleToggle }) {
  const { spanish } = useLanguage();
  const [time, setTime] = useState(getTime());

  function getTime() {
    const hours = new Date().getHours().toPrecision(2);
    const minutes = new Date().getMinutes().toPrecision(2);
    const seconds = new Date().getSeconds().toPrecision(2);
    return `${24 - hours}:${minutes}:${seconds}`;
  }
  setInterval(() => {
    setTime(getTime());
  }, 1000);
  return (
    <section className="bg-black bg-opacity-80 fixed top-0 left-0 right-0 w-screen min-h-screen z-[999999]">
      <button
        onClick={handleToggle}
        className="absolute top-8 right-8 text-red-600 text-3xl rounded-full w-10 h-10 bg-white font-bold flex justify-center items-center"
      >
        <CloseIcon
          fontSize="inherit"
          fontColor="inherit"
          className="font-bold"
        />
        {/* <b className="text-red-600 font-extrabold text-2xl  ">X</b> */}
      </button>

      <article className="w-full h-screen gap-4 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center text-center text-3xl font-bold">
          <p className="text-xl sm:text-3xl font-bold">
            {spanish
              ? "Tiempo restante hasta que los tokens se restablezcan:"
              : "Time remaining until the tokens are reset:"}
          </p>
          <p>{time}</p>
        </div>
        <h2 className="sm:text-5xl font-bold wave-text">
          {spanish ? "Obtener Tokens" : "Get Tokens"}
        </h2>
        <button className="w-44 text-black rounded-3xl p-1 text-xl font-semibold bg-slate-100">
          {spanish ? "Ver anuncio" : "Watch ad"}
        </button>
        <GoToPlan from={from} />
      </article>
    </section>
  );
}

export default ModalGetTokens;
