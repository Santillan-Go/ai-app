"use client";
import React from "react";
import NameUser from "./NameUser";
import LanguageUser from "./LanguageUser";
import ThemeUser from "./ThemeUser";
import useLanguage from "@/HOOKS/useLanguage";
import { useAppSelector } from "@/store/store";
import BtnLogOut from "./BtnLogOut";
import useTheme from "@/HOOKS/useTheme";
import Link from "next/link";
import GoToPlan from "./GoToPlan";

function Config() {
  const language = useLanguage();
  const username = useAppSelector((state) => state.userRedux.username);
  const Theme = useTheme();
  //${Theme.theme === "dark mode" ? `${Theme.children}` : "bg-main-white"}

  //
  return (
    <article
      className={`${
        Theme.theme === "dark mode" ? `${Theme.children}` : ""
      } p-2 sm:p-4 flex flex-col gap-7 sm:gap-11 w-full sm:w-60% shadow-mine-black rounded-3xl`}
    >
      <NameUser
        buttonText={language.config.buttonText}
        h1={language.config.h1}
        user={username}
        buttonText2={language.config.buttonText2}
      />

      <div className="flex flex-col gap-10 ">
        <h1 className="text-gray-500 text-2xl  sm:text-3xl font-bold">
          {language.language.h1}
        </h1>

        <LanguageUser
          label={language.language.label}
          options={language.language.options}
        />

        <ThemeUser
          label={language.theme.label}
          options={language.theme.options}
          language={language.language}
        />
      </div>

      <div className="flex flex-col gap-2  ">
        <GoToPlan from="config" />
        {/* <Link
          href={"/plans"}
          className=" w-44 text-black rounded-3xl p-1 text-xl font-semibold bg-slate-100 upgrade_btn_wave "
        >
          Upgrade✨
        </Link> */}
        <div className="w-full flex justify-center">
          <BtnLogOut />
        </div>
      </div>
    </article>
  );
}

export default Config;
