"use client";
import React, { useEffect, useRef } from "react";
import Message from "./Message";
import SqueletonMessage from "./SqueletonMessage";
import MessageError from "./MessageError";

const Messages = React.memo(
  React.forwardRef(function Messages({
    messages,
    isLoading,
    error,
    callAgain,
    showError,
    messageContainerRef,
    handleScroll,
    messagesEndRef,
  }) {
    const LastOneRef = useRef(null);
    const Squeleton = useRef(null);

    useEffect(() => {
      if (LastOneRef.current) {
        LastOneRef.current.scrollIntoView({ behavior: "smooth" });
        // LastOneRef.current.style = "card-text";
        //LastOneRef.current.classList.add("card-text"); // Add the class
      }
    }, [messages]);

    useEffect(() => {
      if (Squeleton.current) {
        Squeleton.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [isLoading, messages]);
    const lastMessage = (index) =>
      index === messages.length - 1 ? LastOneRef : null;

    const lastMessageOne = messages[messages.length - 1];
    return (
      <div
        onScroll={handleScroll}
        ref={messageContainerRef}
        className="flex-grow sm:basis-[90%] overflow-y-auto scrollbar-thin flex flex-col gap-16 sm:p-36 w-full bg-green-400"
      >
        {messages.map((message, index) => (
          <Message
            key={crypto.randomUUID()}
            content={message.content}
            who={message.role}
            lastRef={lastMessage(index)}
          />
        ))}

        <div ref={messagesEndRef} className="bg-transparent w-0 h-0"></div>
        {isLoading && <SqueletonMessage ref={Squeleton} />}

        {error && showError && (
          <MessageError callAgain={callAgain} lastMessageOne={lastMessageOne} />
        )}
        {/* <div ref={messagesEndRef} />      */}
      </div>
    );
  })
);

//basis-[85%] sm:basis-[90%] overflow-y-auto scrollbar-thin flex flex-col gap-16 sm:p-36 w-full bg-green-400

export default Messages;
