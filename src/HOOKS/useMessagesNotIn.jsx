"use client";
import React, { memo, useCallback, useState } from "react";
import { Bounce, toast } from "react-toastify";
const initialMessage = { content: "", role: "you" };
function useMessagesNotIn() {
  const [messages, setMessages] = useState([]);
  const [messageUser, setMessageUser] = useState(initialMessage);
  const [error, setError] = useState(false);
  const [showError, setshowError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [Tokens, setTokens] = useState(5);

  // const handleResponseAI = async ({ message }) => {
  //   setMessages([...messages, message]);
  // };
  const lastMessages = useCallback(() => {
    return [...messages].slice(-7);
  }, [messages]);
  //use the hook memo

  const callAgain = async ({ message }) => {
    console.log("callAgain render ");
    setError(false);
    await callAI({ message: message.content });
  };
  const callAI = async ({ message }) => {
    console.log("callAI render ");
    setisLoading(!isLoading);
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ content: message, lastMessages: lastMessages() }),
    });

    //HANDLE ERROR
    if (!res.ok) {
      setError(true);

      setshowError(true);
      setMessageUser(initialMessage);
      setisLoading(false);
      return;
    }

    const data = await res.json();

    // SAVE RESPONSE'S AI IN DB
    console.log(data);
    //  setMessages([...messages, data]);
    setMessages((prevMessages) => [...prevMessages, data]);
    // await handleResponseAI({ message: data });
    setisLoading(false);
  };
  //make the petition and save in the state
  const Submit = async (event) => {
    event.preventDefault();
    // const message = { content: event.target.content.value, who: "you" };
    if (!messageUser.content) return;
    console.log("SUBMIT render ");
    if (Tokens < 1) {
      toast.error("0 Tokesn, Please Log in", {
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
    //call the api ai
    setMessageUser(initialMessage);
    //update the state
    setMessages([...messages, messageUser]);

    setMessageUser(initialMessage);
    await callAI({ message: messageUser.content });
  };

  const Change = (event, id) => {
    setMessageUser({ ...messageUser, content: event.target.value });
    setshowError(false);
    setError(false);
  };

  return {
    messages,
    Submit,
    Change,
    message: messageUser.content,
    isLoading,
    error,
    callAgain,
    showError,
    Tokens,
  };
}

export default useMessagesNotIn;
