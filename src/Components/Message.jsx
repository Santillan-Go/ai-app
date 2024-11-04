"use client";

import useTheme from "@/HOOKS/useTheme";
import ReactMarkDown from "react-markdown";
function Message({ who, content, lastRef }) {
  const Theme = useTheme();

  const getColorBG = () => {
    if (Theme.theme === "default") return "bg-purple-dark  text-slate-300 ";
    if (Theme.theme === "blue fade") return " dark-blue text-slate-300 ";
    if (Theme.theme === "dark mode")
      return "border border-slate-400 style_message_you  text-slate-300 ";
  };

  //border border-slate-400

  //shadow-lg shadow-gray-600
  return (
    <article
      className={`
       
        ${
          who == "you" ? "self-start" : "self-end"
        } sm:pl-2 rounded-3xl p-1  min-w-100px inline-block ${
        who === "you" ? "max-w-400px p-4" : "max-w-800px p-3"
      }  

      ${
        who == "you"
          ? " bg-gray-light bg-opacity-15  text-slate-300 font-bold  "
          : `${getColorBG()}`
      } 

      ${
        who === "you" &&
        Theme.theme === "dark mode" &&
        "bg-gray-dark text-slate-300"
      }
      
       `}
      ref={lastRef}
    >
      {/* <p className="w-max inline  text-16px">{content}</p> */}
      <ReactMarkDown className={`   text-[16px]  flex flex-col gap-8  `}>
        {content}
      </ReactMarkDown>
    </article>
  );
}

export default Message;
