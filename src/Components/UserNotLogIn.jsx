"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import FormMessage from "./FormMessage";
import useMessagesNotIn from "@/HOOKS/useMessagesNotIn";
import Messages from "./Messages";
import GrettingNoIn from "./GrettingNoIn";
import FormMessageNotIn from "./FormMessageNotIn";

function UserNotLogIn() {
  const {
    Change,
    Submit,
    callAgain,
    error,
    isLoading,
    message,
    messages,
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
    <section className="h-screen w-full flex flex-col justify-between p-2">
      <div className="flex justify-end gap-4">
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
