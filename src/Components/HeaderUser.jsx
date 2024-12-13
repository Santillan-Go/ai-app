"use client";
import useLanguage from "@/HOOKS/useLanguage";
import useTheme from "@/HOOKS/useTheme";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { updateUsername } from "@/store/userRedux";
import { useEffect } from "react";

function HeaderUser() {
  const language = useLanguage();
  const Theme = useTheme();
  const username = useAppSelector((state) => state.userRedux.username);
  // const dispatch = useAppDispatch();
  const greetting = () => {
    const date = new Date();
    let hours = date.getHours();

    const timeDay = hours >= 12 ? "PM" : "AM";
    //FORMAT 24, CHANGE IT TO FORMAT 12

    hours = hours % 12;

    hours = hours ? hours : 12;

    if (hours === 12 && timeDay === "PM") {
      return language.gretting.timeDay[1];
      // 12 PM should be afternoon
    } else if (timeDay === "AM") {
      return language.gretting.timeDay[0];
    } else if (timeDay === "PM" && hours < 6) {
      return language.gretting.timeDay[1];
    } else {
      return language.gretting.timeDay[2];
    }
  };
  // useEffect(() => {
  //   if (name) {
  //     dispatch(updateUsername({ username: name }));
  //   }
  // }, [name]);
  const nameSplit = (name) => {
    const cut = name.split(" ");
    //but what if the name is just one word?
    if (cut.length === 1) {
      return cut[0];
    }
    return `${cut[0]} ${cut[1]}`;
  };
  /*
 const name = (name) => {
    const cut = name.split();

    return `${cut[0]} ${cut[1]}`
  };
  console.log(name("Juan Carlos"))
*/
  return (
    <section
      className={`
        ${
          Theme.theme === "dark mode"
            ? `${Theme.children}`
            : "bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10"
        }
        bg-main-white rounded-3xl p-1  flex flex-col gap-2 sm:gap-5 
    w-8/12 mt-0 ml-0 sm:w-1/3  sm:mt-0 sm:ml-0`}
    >
      <div className="flex ">
        <p className="apply-spin inline-block text-2xl">👋</p>
        <h1 className="font-bold sm:text-2xl  wave-text">
          {language.spanish ? "HOLA" : "HI"},{" "}
          {username ? nameSplit(username).toLocaleUpperCase() : "Loading..."}!
        </h1>
      </div>

      <p className="font-bold sm:text-2xl sm:pl-7 text-slate-300">
        {" "}
        {greetting()}{" "}
      </p>
    </section>
  );
}

export default HeaderUser;
