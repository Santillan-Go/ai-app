"use client";
import React from "react";
import GoToPlan from "./GoToPlan";
import CloseIcon from "@mui/icons-material/Close";
function ModalGetTokens({ from, handleToggle }) {
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
        <h2 className="sm:text-5xl font-bold wave-text">Get Tokens</h2>
        <button className="w-44 text-black rounded-3xl p-1 text-xl font-semibold bg-slate-100">
          Watch ad
        </button>
        <GoToPlan from={from} />
      </article>
    </section>
  );
}

export default ModalGetTokens;
