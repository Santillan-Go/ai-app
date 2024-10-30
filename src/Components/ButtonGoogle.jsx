"use client";
import { signIn } from "next-auth/react";
import React from "react";

function ButtonGoogle({ action }) {
  return (
    <button
      className="w-9/12 bg-main-white rounded-3xl p-1 text-2xl font-bold flex  items-center hover:bg-slate-300"
      onClick={() => signIn("google")}
    >
      <img
        className="rounded-full w-10 h-10"
        src="https://foroalfa.org/imagenes/ilustraciones/1204.jpg"
        alt="image_logo_google"
      />
      <p className="p-0 text-black  hover:text-gray-800 hover:cursor-pointer">
        {action}
      </p>
    </button>
  );
}

export default ButtonGoogle;
