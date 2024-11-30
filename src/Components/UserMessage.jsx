"use client";

import BackTo from "./BackTo";
import FormMessage from "./FormMessage";
import Messages from "./Messages";
import useMessages from "@/HOOKS/useMessages";
import GreetingUser from "./GreetingUser";
import { useCallback, useRef, useState } from "react";
import useGetMessages from "@/HOOKS/useGetMessages";
import SkeletonLoader from "./SkeletonLoader";
import BtnRetry from "./BtnRetry";
import BtnGoToBottom from "./BtnGoToBottom";
import UseImageCrop from "@/HOOKS/useImageCrop";
import ModalmageText from "./ModalmageTex";
import TokensChat from "./TokensChat";
import useValidatePlan from "@/HOOKS/useValidatePlan";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
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
  const { money } = useValidatePlan();
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
    Tokens,
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

  /*
  "flex justify-between basis-[5%] sm:basis-auto bg-red-500

  */
  return (
    <section className="h-screen p-2 pt-0 sm:pt-2 flex flex-col bg-pink-500">
      <ToastContainer
        // THIS IS FIXED, SO THERE IS NOT PROBLEM WITH THIS COMPONENT
        className={
          "w-[90%] ml-auto mr-auto   sm:w-[320px] bottom-auto  sm:bottom-12 left-1/2 translate-x-[-50%]  sm:left-auto sm:top-auto sm:right-2 top-2    sm:p-4 p-2 gap-2 absolute  flex flex-col h-4/5 items-center sm:flex-col-reverse"
        }
      />
      <div className="flex-none h-[5%] flex justify-between sm:basis-auto bg-red-500">
        <BackTo LINK={`/teacher/${id}`} />
        {money ? <div></div> : <TokensChat Tokens={Tokens} />}
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
        <div className="  basis-[85%] sm:basis-[90%] flex justify-center items-center">
          <BtnRetry retryFetch={retryFetch} />
        </div>
      ) : (
        <GreetingUser />
      )}

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

/*

  <section className="h-screen p-2 flex flex-col ">
      <ToastContainer
        // THIS IS FIXED, SO THERE IS NOT PROBLEM WITH THIS COMPONENT
        className={
          "w-[90%] ml-auto mr-auto  sm:w-[320px] bottom-auto  sm:bottom-12 left-1/2 translate-x-[-50%]  sm:left-auto sm:top-auto sm:right-2 top-2    sm:p-4 p-2 gap-2 absolute  flex flex-col h-4/5 items-center sm:flex-col-reverse"
        }
      />
      <div className="flex justify-between ">
        <BackTo LINK={`/teacher/${id}`} />
        {money ? <div></div> : <TokensChat Tokens={Tokens} />}
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
*/

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
