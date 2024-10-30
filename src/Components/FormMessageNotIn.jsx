"use client";
import { forwardRef } from "react";
import useLanguage from "@/HOOKS/useLanguage";
import ButtonVoice from "./ButtonVoice";
import BtnSend from "./BtnSend";
import ButtonFile from "./ButtonFile";
import useTheme from "@/HOOKS/useTheme";
import { autoResize } from "./FormMessage";

const FormMessageNotIn = forwardRef(function FormMessageNotIn(
  {
    Change,
    Submit,

    message,
  },
  ref
) {
  const language = useLanguage();
  const Theme = useTheme();

  const getColorBorder = () => {
    if (Theme.theme === "default") return "focus-within:outline-purple-800 ";
    if (Theme.theme === "blue fade") return "  focus-within:outline-blue-900 ";
    if (Theme.theme === "dark mode") return " focus-within:outline-gray-700 ";
  };

  return (
    <form
      onSubmit={(event) => Submit(event)}
      className="basis-[10%] flex sm:justify-center gap-[2px] items-center sm:gap-8 sm:pl-4 sm:pr-4 "
    >
      <div
        className={` bg-gray-medium  rounded-3xl self-end sm:self-auto basis-[80%] sm:basis-[60%] relative p-1 textarea-container
       ${getColorBorder()} `}
      >
        <textarea
          ref={ref}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.target.style.height = "0px";
              event.preventDefault();
              Submit(event);
            }
          }}
          onInput={autoResize}
          onChange={(event) => Change(event)}
          type="text"
          name="content"
          value={message}
          placeholder={
            language.spanish
              ? "Haz me cualquier pregunta..."
              : "ask me anything..."
          }
          className="outline-none  bg-gray-medium  rounded-3xl  pl-3  w-[94%] text-xl resize-none min-h-12 h-12 max-h-96  overflow-y-auto resize-vertical text-black self-end form_message placeholder:text-gray-500"
          rows={1}
          spellCheck="false" // Desactiva la verificación ortográfica
          autoCorrect="off" // Desactiva la corrección automática
          autoComplete="off"
        />

        <BtnSend input={message} />
      </div>

      <ButtonVoice
        IsListening={false}
        toggleListening={() => {}}
        disabled={true}
      />
      <ButtonFile
        hadleResetImg={() => {}}
        onSelectFile={() => {}}
        resetText={() => {}}
        disabled={true}
      />
    </form>
  );
});
export default FormMessageNotIn;

{
  /* <button
        type="submit"
        className="rounded-full  bg-gray-300 self-end  w-11 h-11 flex justify-center items-center"
        disabled={!input}
      >
        <img src="/send.png" alt="send-img" className=" w-8 h-8" />
      </button> */
}
