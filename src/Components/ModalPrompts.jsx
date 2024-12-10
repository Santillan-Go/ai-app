"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

//SHOW PROMPTS
//UPDATE PROMPTS
//DELETE PROMPTS
//ADD PROMPTS
//ORDER PROMPTS DRAGING THEM
import React from "react";
import { addPrompt } from "@/store/promptClip";
import CardPrompt from "./CardPrompt";
import CardPromptContainer from "./CardPromptContainer";

function ModalPrompts({ handleClose }) {
  //use useAppSelector to get the prompts
  const prompts = useAppSelector((state) => state.PropmtsRedux.prompts);

  const dispatch = useAppDispatch();
  const handleForm = (event) => {
    event.preventDefault();
    const prompt = event.target.prompt.value;

    dispatch(addPrompt({ prompt }));
    event.target.prompt.value = "";
  };

  return (
    //CENTER THIS MODAL
    <section className="bg-black bg-opacity-15 backdrop-blur-md border border-white-10 h-[95vh] right-0   w-[95vw] fixed    p-2 rounded-xl  flex flex-col gap-2  z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
      <button className="absolute top-[2px] right-2">
        <CloseIcon className="text-white" onClick={handleClose} />
      </button>
      <form className="flex flex-col gap-2 mt-5 w-full" onSubmit={handleForm}>
        <input
          type="text"
          autoComplete="off"
          name="prompt"
          placeholder="New prompt"
          className="p-2 rounded-xl  bg-opacity-15 backdrop-blur-md border border-white-10 max-w-[400px] mr-auto ml-auto"
        />
        <button
          type="submit"
          className="bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10 p-2 rounded-xl max-w-[200px] mr-auto ml-auto"
        >
          <AddIcon />
        </button>
      </form>

      <CardPromptContainer />
    </section>
  );
}

export default ModalPrompts;
