"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useAppSelector } from "@/store/store";
function PromptClipBoard({
  SendByClipBoard,
  clipboard,
  hiddeBoard,
  handleShowModal,
}) {
  //const prompts = ["Explain this", "translate to english", "correct this"];

  /*
  bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10   rounded text-white text-[16px] pl-1 pr-1
  */
  const prompts = useAppSelector((state) => state.PropmtsRedux.prompts);
  return (
    <>
      <div className="bg-black bg-opacity-15 backdrop-blur-md border border-white-10 w-[95%] sm:max-w-[792px]   fixed bottom-20 p-2 rounded-xl     sm:translate-x-[-38%] sm:left-[38%] ">
        <button className="absolute top-[2px] right-2" onClick={hiddeBoard}>
          <b className="text-white">x</b>
        </button>
        <button className="absolute top-2 right-5" onClick={handleShowModal}>
          <MoreVertIcon className="text-white" />
        </button>
        <article className="flex gap-2">
          {prompts.map((prompt) => {
            return (
              <button
                className=" bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10   rounded text-white text-xs sm:text-[16px] pl-1  sm:p-2 sm:rounded-md w-[86px] sm:w-[auto]"
                key={prompt.id}
                onClick={() => {
                  SendByClipBoard({ prompt: prompt.name });
                }}
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap block">
                  {prompt.name}
                </span>
              </button>
            );
          })}
        </article>
        <p className="text-white text-xs font-semibold text-center w-full ">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap block">
            {clipboard}
          </span>
        </p>
      </div>
    </>
  );
}

export default PromptClipBoard;
