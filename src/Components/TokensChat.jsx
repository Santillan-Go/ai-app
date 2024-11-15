"use client";

import AddIcon from "@mui/icons-material/Add";
import { usePathname } from "next/navigation";
import ModalGetTokens from "./ModalGetTokens";
import { useState } from "react";
function TokensChat() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <section className="flex items-center gap-2 text-slate-300 ">
      {isOpen && <ModalGetTokens from={pathName} handleToggle={handleToggle} />}
      <h3 className="text-xl font-semibold text-center ">{`Tokens: ${10}`}</h3>
      <button
        onClick={handleToggle}
        className="group flex items-center gap-[2px]
       text-xl font-bold text-center rounded-3xl bg-gray-light bg-opacity-50 text-slate-300    sm:pl-1 sm:pr-1 hover:bg-opacity-80 hover:text-gray-600   "
      >
        <p className="text-xl font-bold ">Obtener</p>{" "}
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
