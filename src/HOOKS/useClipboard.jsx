import React, { useEffect, useState } from "react";

function useClipboard() {
  const [clipboard, setClipboard] = useState("");
  const [showBoard, setshowBoard] = useState(true);
  // async function readClipboard() {
  //   try {
  //     const text = await navigator.clipboard.readText();
  //     console.log("Clipboard content:", text);
  //     return text;
  //   } catch (err) {
  //     console.error("Failed to read clipboard content:", err);
  //     return "nothing!";
  //   }
  // }

  useEffect(() => {
    document.addEventListener("copy", async () => {
      try {
        const text = await navigator.clipboard.readText();
        setClipboard(text);
        setshowBoard(true);
      } catch (err) {
        console.error("Failed to access clipboard:", err);
      }
    });

    // Stop watching clipboard changes when component unmounts
    // return () => {
    //   document.removeEventListener("copy");
    // };
    // async function watchClipboardChanges() {
    //   const clipboardObserver = new window.ClipboardEvent("paste");
    //   clipboardObserver.addEventListener("paste", async () => {
    //     const text = await readClipboard();
    //     setClipboard(text);
    //   });

    //   window.addEventListener("paste", clipboardObserver);

    //   return () => {
    //     clipboardObserver.removeEventListener("paste");
    //   };
    //   // Start watching clipboard changes
    // }
    // watchClipboardChanges();
  }, []);

  const hiddeBoard = () => setshowBoard(false);
  // Call the function to test it
  return {
    clipboard,
    showBoard,
    hiddeBoard,
    // readClipboard,
    // watchClipboardChanges,
    // clipboardObserver,
  };
}

export default useClipboard;
