"use client";
import useLanguage from "@/HOOKS/useLanguage";
import useTheme from "@/HOOKS/useTheme";
import { useAppSelector } from "@/store/store";
import React from "react";

function GreetingUser() {
  const language = useLanguage();
  const username = useAppSelector((state) => state.userRedux.username);
  const Theme = useTheme();

  const getBG = () => {
    if (Theme.theme === "default") return "gradient-container";
    if (Theme.theme === "blue fade") return "blue-fade-bg";
    if (Theme.theme === "dark mode") return "bg-black";
  };

  return (
    <article className="flex-1 flex  justify-center mt-1">
      <section className="wrapper  sm:w-4/5 w-[90%]">
        <div class="inside">
          <div class="shiny"></div>
          <div class={`text-conteiner ${getBG()}`}>
            <div className="child-container flex flex-col justify-center items-center">
              <h1 className={"wave-text  text-xl sm:text-4xl"}>
                {language.spanish
                  ? ` HOLA, ${username.toLocaleUpperCase()}!`
                  : ` HI, ${username.toLocaleUpperCase()}!`}
              </h1>

              <h1 className={"wave-text  text-xl sm:text-4xl"}>
                {language.spanish
                  ? `¿QUÉ PUEDO HACER POR TI?`
                  : `WHAT CAN I DO FOR YOU?`}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

/* <div class="inside">
          <div class="shiny"></div>
          <div
            className={`w-10/12 rounded-3xl text-center flex flex-col   h-32   mt-4`}
          >
            <h1 className={"wave-text text-5xl"}>
              {language.spanish
                ? ` HOLA, ${username.toLocaleUpperCase()}!`
                : ` HI, ${username.toLocaleUpperCase()}!`}
            </h1>

            <h1 className={"wave-text text-5xl"}>
              {language.spanish
                ? `¿QUÉ PUEDO HACER POR TI?`
                : `WHAT CAN I DO FOR YOU?`}
            </h1>
          </div>
        </div>*/
export default GreetingUser;

/* <article className="flex-1 flex justify-center  ">
      <div
        className={`${getColorBG()} w-10/12 rounded-3xl text-center flex flex-col   h-32  shadow-mine mt-4`}
      >
        <h1 className={"wave-text text-5xl"}>
          {language.spanish
            ? ` HOLA, ${username.toLocaleUpperCase()}!`
            : ` HI, ${username.toLocaleUpperCase()}!`}
        </h1>

        <h1 className={"wave-text text-5xl"}>
          {language.spanish
            ? `¿QUÉ PUEDO HACER POR TI?`
            : `WHAT CAN I DO FOR YOU?`}
        </h1>
      </div>
    </article>*/
