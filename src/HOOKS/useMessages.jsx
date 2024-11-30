"use client";

import { newmessages } from "@/store/apiCalls";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/store/store";
import { useSession } from "next-auth/react";
import useVoiceToText from "./useVoiceToText";
import useTextFromImage from "./useTextFromImage";
import { autoResize } from "@/Components/FormMessage";
import useValidatePlan from "./useValidatePlan";
import { Bounce, toast } from "react-toastify";
import useLanguage from "./useLanguage";
function useMessages({ id, lastMessages }) {
  const { data: session, status } = useSession();

  const userID = session?.user?.id || "";
  const username = useAppSelector((state) => state.userRedux.username).split(
    " "
  )[0];
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const ref = useRef(null);
  const [cursor, setCursor] = useState(0);
  const [Tokens, setTokens] = useState(10);
  const { money } = useValidatePlan();
  const { languageName, spanish } = useLanguage();
  //console.log(all);
  const {
    toggleListening,
    transcript,
    setTranscript,
    interimTranscript,
    IsListening,
    handleTyping,
  } = useVoiceToText({
    lang: spanish ? "es-ES" : "en-EN",
  });

  const { loadingText, resetText, setImage, text } = useTextFromImage();

  const dispatch = useDispatch();

  const handleResponseAI = useCallback(
    async ({ message }) => {
      await newmessages({ dispatch, id, message, userID });
    },
    [dispatch, id, userID]
  );

  const callAgain = useCallback(async ({ message }) => {
    setError(false);
    setShowError(false);
    await callAI({ message });
  }, []);

  const callAI = useCallback(
    async ({ message }) => {
      setIsLoading(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          content: message,
          lastMessages,
          username,
          language: languageName,
        }),
      });

      if (!res.ok) {
        setError(true);
        setShowError(true);
        setInput("");
        setTranscript("");
        // setMessage(initialMessage);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      setIsLoading(false);
      await handleResponseAI({ message: data });
    },
    [handleResponseAI, lastMessages, username]
  );

  const Submit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!input) return;
      if (!money) {
        if (Tokens < 1) {
          toast.error(" You don't have enough tokens", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            bodyClassName: "bg-opacity-15",
            // className:
            //   "top-2 bottom-auto sm:bottom-7 sm:top-auto right-0 sm:right-2 p-0 w-full",
          });

          // return <h2 className="right-2"></h2>;

          // toast("You do not have enough tokens");
          // toast("There are not more tokens");
          return;
        }
        setTokens(Tokens - 1);
      }
      setInput("");
      if (ref.current) {
        ref.current.value = "";
        autoResize({ target: ref.current });
      }
      await newmessages({
        dispatch,
        id,
        message: { role: "you", content: input },
        userID,
      });
      await callAI({ message: input });
      // setMessage({ ...message, content: "" });
      setTranscript("");
      // setInput("");
      // [message, dispatch, id, userID, callAI, IsListening, handleTyping]
    },
    [input, dispatch, id, userID, callAI]
  );

  const restarTokens = () => setTokens(10);

  const Change = useCallback(
    (event) => {
      const value = event.target.value;
      setCursor(event.target.selectionStart);

      if (IsListening) handleTyping();

      setInput(value);

      setError(false);
      setShowError(false);
    },
    [IsListening, handleTyping]
  );
  useEffect(() => {
    console.log({ input });
  }, [input]);
  useEffect(() => {
    console.log({ transcript });
  }, [transcript]);

  useEffect(() => {
    // console.log(ref);
    ref.current?.setSelectionRange(cursor, cursor);
  }, [ref, cursor, input]);
  useEffect(() => {
    if (IsListening && transcript) {
      // setInput((prevInput) => prevInput + " " + transcript);
      setInput((prevInput) => {
        const updatedInput = prevInput + " " + transcript;

        // Trigger autoResize after updating input
        if (ref.current) {
          ref.current.value = updatedInput;
          autoResize({ target: ref.current });
        }

        return updatedInput;
      });
      setTranscript("");
    }
  }, [transcript, IsListening, interimTranscript]);

  useEffect(() => {
    if (text) {
      // setInput((prevInput) => prevInput + " " + text);
      setInput((prevInput) => {
        const updatedInput = prevInput + " " + text;

        // Trigger autoResize after updating input
        if (ref.current) {
          ref.current.value = updatedInput;
          autoResize({ target: ref.current });
        }

        return updatedInput;
      });
    }
  }, [text]);

  return {
    Submit,
    Change,
    input,
    isLoading,
    error,
    callAgain,
    showError,
    toggleListening,
    ref,
    IsListening,
    loadingText,
    resetText,
    setImage,
    text,
    Tokens,
  };
}

export default useMessages;

// const handleResponseAI = async ({ message }) => {
//   await newmessages({ dispatch, id, message, userID });
// };

// const callAgain = async ({ message }) => {
//   setError(false);
//   setshowError(false);

//   await callAI({ message });
// };
// const callAI = async ({ message }) => {
//   setisLoading(!isLoading);
//   const res = await fetch("/api/chat", {
//     method: "POST",
//     body: JSON.stringify({ content: message, lastMessages, username }),
//   });

//   //HANDLE ERROR
//   if (!res.ok) {
//     setError(true);

//     setshowError(true);
//     setMessage(initialMessage);
//     setisLoading(false);
//     return;
//   }

//   const data = await res.json();

//   // SAVE RESPONSE'S AI IN DB
//   setisLoading(false);
//   await handleResponseAI({ message: data });
// };
//make the petition and save in the state
// const Submit = async (event) => {
//   event.preventDefault();
//   // const message = { content: event.target.content.value, who: "you" };
//   if (!message.input) return;

//   //call the api ai
//   setMessage({ ...message, input: "" });
//   //update the state
//   await newmessages({ dispatch, id, message, userID });
//   //setMessage(initialMessage);
//   await callAI({ message: message.content });
//   setMessage({ ...message, input: "", content: "" });
// };

// const Change = (event, id) => {
//   setMessage({
//     ...message,
//     content: event.target.value,
//     input: event.target.value,
//   });
//   setError(false);
//   setshowError(false);
// };
