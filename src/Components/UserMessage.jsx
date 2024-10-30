"use client";

import { useAppSelector } from "@/store/store";
import BackTo from "./BackTo";
import FormMessage from "./FormMessage";

import Messages from "./Messages";
import useMessages from "@/HOOKS/useMessages";
import GreetingUser from "./GreetingUser";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useGetMessages from "@/HOOKS/useGetMessages";
import SkeletonLoader from "./SkeletonLoader";
import BtnRetry from "./BtnRetry";
import BtnGoToBottom from "./BtnGoToBottom";
import useTextFromImage from "@/HOOKS/useTextFromImage";
import UseImageCrop from "@/HOOKS/useImageCrop";
import ModalmageText from "./ModalmageTex";
//create an array of messages
// const array = Array(100).fill({
//   content:
//     "HI, aaaa aaaaas sssss ssss sss aaa aaaaaa aaaaaaa aaaaa aaaaa aaaaaa aaaaaaa aaaa aaaaa aaaaaaa",
//   role: "you",
// });

function UserMessage({ id }) {
  const messagesEndRef = useRef(null);
  const messageContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const {
    messages,
    lastMessages,
    hasMessages,
    loading,
    errorLoad,
    retryFetch,
  } = useGetMessages({
    chatID: id,
  });

  const {
    Change,
    Submit,
    isLoading,
    callAgain,
    error,
    showError,
    input,
    toggleListening,
    ref,
    IsListening,
    loadingText,
    resetText,
    setImage,
    text,
  } = useMessages({
    id,
    lastMessages,
  });

  // // Scroll to the bottom function

  const handleScroll = useCallback(() => {
    if (messageContainerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } =
        messageContainerRef.current;

      let calculation = scrollHeight - scrollTop - 550;
      // console.log({ calculation });
      // console.log({ clientHeight });
      if (calculation > clientHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const {
    aspect,
    completedCrop,
    crop,
    imgSrc,
    onDownloadCropClick,
    onImageLoad,
    onSelectFile,
    scale,
    imgRef,
    previewCanvasRef,
    setCompletedCrop,
    setCrop,
    setScale,
    accept,
    handleAccept,
    hadleResetImg,
    handleMouseDown,
    handleMouseUpOrLeave,
    isMouseDown,
    handleScale,
  } = UseImageCrop();

  return (
    <section className="h-screen p-2 flex flex-col">
      <div className="flex justify-between ">
        <BackTo LINK={`/teacher/${id}`} />
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : hasMessages ? (
        <Messages
          messages={messages.messageAll ?? []}
          isLoading={isLoading}
          callAgain={callAgain}
          error={error}
          showError={showError}
          messageContainerRef={messageContainerRef}
          handleScroll={handleScroll}
          messagesEndRef={messagesEndRef}
        />
      ) : errorLoad ? (
        <div className=" basis-[90%] flex justify-center items-center">
          <BtnRetry retryFetch={retryFetch} />
        </div>
      ) : (
        <GreetingUser />
      )}
      {/* Scroll to Bottom Button */}
      {showScrollButton && <BtnGoToBottom scrollToBottom={scrollToBottom} />}
      <ModalmageText
        accept={accept}
        handleAccept={handleAccept}
        hadleResetImg={hadleResetImg}
        text={text}
        loadingText={loadingText}
        imgSrc={imgSrc}
        onDownloadCropClick={onDownloadCropClick}
        resetText={resetText}
        isMouseDown={isMouseDown}
        handleMouseDown={handleMouseDown}
        handleMouseUpOrLeave={handleMouseUpOrLeave}
        handleScale={handleScale}
        setCrop={setCrop}
        completedCrop={completedCrop}
        setCompletedCrop={setCompletedCrop}
        crop={crop}
        scale={scale}
        aspect={aspect}
        imgRef={imgRef}
        setScale={setScale}
        previewCanvasRef={previewCanvasRef}
        onImageLoad={onImageLoad}
        setImage={setImage}
      />
      <FormMessage
        id={id}
        Change={Change}
        Submit={Submit}
        input={input}
        toggleListening={toggleListening}
        ref={ref}
        IsListening={IsListening}
        hadleResetImg={hadleResetImg}
        onSelectFile={onSelectFile}
        resetText={resetText}
      />
    </section>
  );
}

export default UserMessage;

// const numberPosition = useMemo(() => {
//   const index = teachers.findIndex((tutor) => tutor._id === id);
//   return index !== -1 ? index + 1 : 8;
// }, [teachers, id]);

/* <h1 className="text-main-white text-center font-bold text-3xl ">
        CHAT AI-{numberPosition}
      </h1> */

// const teachers = useAppSelector(
//   (state) => state.MessagesReducer.tutorsGlobal
// );

//const { setImage, text, resetText, loadingText } = TextFromImage();
