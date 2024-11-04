"use client";
import useTheme from "@/HOOKS/useTheme";
import React from "react";

function GrettingNoIn() {
  // const language = useLanguage();
  // const username = useAppSelector((state) => state.userRedux.username);
  const Theme = useTheme();
  // const getColorBG = () => {
  //   if (Theme.theme === "default") return "worm-border-default  ";
  //   if (Theme.theme === "blue fade") return "worm-border-blue  ";
  //   if (Theme.theme === "dark mode") return " worm-border-dark ";
  // };

  const getBG = () => {
    if (Theme.theme === "default") return "gradient-container";
    if (Theme.theme === "blue fade") return "blue-fade-bg";
    if (Theme.theme === "dark mode") return "bg-black";
  };
  //gradient-container

  return (
    <article className="flex-1 flex  justify-center mt-1  basis-[90%]">
      <section className="wrapper sm:w-4/5 w-[90%]">
        <div class="inside">
          <div class="shiny"></div>
          <div class={`text-conteiner ${getBG()} z-50  `}>
            <div className="child-container flex flex-col justify-center items-center">
              <h1 className={"wave-text text-2xl sm:text-4xl"}>
                Hi, How can I help?
              </h1>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default GrettingNoIn;
