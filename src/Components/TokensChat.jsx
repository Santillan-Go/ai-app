"use client";

import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
import ModalGetTokens from "./ModalGetTokens";
import { useState } from "react";
import useLanguage from "@/HOOKS/useLanguage";
function TokensChat({ Tokens }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const handleToggle = () => setIsOpen(!isOpen);
  const { spanish } = useLanguage();

  return (
    <section className="flex items-center gap-2 text-slate-300 ">
      {isOpen && <ModalGetTokens from={pathName} handleToggle={handleToggle} />}
      <h3 className="text-xl font-semibold text-center ">{`Tokens: ${Tokens}`}</h3>
      <button
        onClick={handleToggle}
        className="group flex items-center gap-[2px]
       text-xl font-bold text-center rounded-3xl bg-gray-light bg-opacity-50 text-slate-300    sm:pl-1 sm:pr-1 hover:bg-opacity-80 hover:text-gray-600   "
      >
        <p className="text-xl font-bold ">{spanish ? "Obtener" : "Get"}</p>{" "}
        <div className=" transform transition-transform duration-300 group-hover:rotate-180 ">
          <AddIcon
            fontSize="large"
            className="text-white  font-bold text-2xl transform transition-transform duration-300 group-hover:rotate-180 group-hover:text-gray-600 "
          />
        </div>
      </button>
    </section>
  );
}

export default TokensChat;
