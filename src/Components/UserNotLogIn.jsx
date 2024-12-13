"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import useMessagesNotIn from "@/HOOKS/useMessagesNotIn";
import Messages from "./Messages";
import GrettingNoIn from "./GrettingNoIn";
import FormMessageNotIn from "./FormMessageNotIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserNotLogIn() {
  const {
    Change,
    Submit,
    callAgain,
    error,
    isLoading,
    message,
    messages,
    Tokens,
    showError,
  } = useMessagesNotIn();

  useEffect(() => {
    function setVhProperty() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", setVhProperty);
    window.addEventListener("load", setVhProperty);
  }, []);
  return (
    <section
      className="max-h-screen sm:h-screen w-full flex flex-col justify-between p-2"
      style={{ height: "calc(var(--vh))" }}
    >
      <ToastContainer
        // THIS IS FIXED, SO THERE IS NOT PROBLEM WITH THIS COMPONENT
        className={
          "w-[90%] ml-auto mr-auto   sm:w-[320px] bottom-auto  sm:bottom-12 left-1/2 translate-x-[-50%]  sm:left-auto sm:top-auto sm:right-2 top-2    sm:p-4 p-2 gap-2 absolute  flex flex-col h-4/5 items-center sm:flex-col-reverse"
        }
      />
      <div className="basis-[5%] sm:basis-auto flex  gap-4  justify-between">
        <h2 className="font-bold text-xl text-center ">Tokens:{Tokens}</h2>
        <div className=" justify-content-end">
          <Link
            className=" rounded-3xl p-1 font-medium text-xl text-gray-900  hover:text-gray-300  elements border border-black"
            href={"/auth/signin"}
          >
            Sign In
          </Link>
          <Link
            className="rounded-3xl p-1 font-medium text-xl text-gray-900   hover:text-gray-300 elements border border-black"
            href={"/auth/register"}
          >
            Register
          </Link>
        </div>
      </div>

      {messages.length < 1 ? (
        <GrettingNoIn />
      ) : (
        <Messages
          callAgain={callAgain}
          error={error}
          isLoading={isLoading}
          messages={messages}
          showError={showError}
        />
      )}

      {/* <FormMessage message={message} Change={Change} Submit={Submit} /> */}
      <FormMessageNotIn message={message} Change={Change} Submit={Submit} />
    </section>
  );
}

export default UserNotLogIn;
