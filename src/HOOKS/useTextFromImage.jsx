import { useState } from "react";
import { createWorker } from "tesseract.js";

function useTextFromImage() {
  const [text, setText] = useState("");
  const [loadingText, setloadingText] = useState(false);

  async function getText({ img }) {
    const worker = await createWorker("spa");
    //spa || eng
    const ret = await worker.recognize(img);
    setText(ret.data.text);
    await worker.terminate();
  }

  const setImage = async ({ img }) => {
    setloadingText(true);
    await getText({ img });
    setloadingText(false);
  };

  const resetText = () => {
    setText("");
    setloadingText(false);
  };

  return {
    setImage,
    text,
    resetText,
    loadingText,
  };
}

export default useTextFromImage;
