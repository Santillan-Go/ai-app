"use client";
import React, { memo, useCallback, useState } from "react";

const initialMessage = { content: "", role: "you" };
function useMessagesNotIn() {
  const [messages, setMessages] = useState([]);
  const [messageUser, setMessageUser] = useState(initialMessage);
  const [error, setError] = useState(false);
  const [showError, setshowError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

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
  };
}

export default useMessagesNotIn;
