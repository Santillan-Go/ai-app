"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { changePosition } from "@/store/promptClip";
import CardPrompt from "./CardPrompt";

export default function CardPromptContainer() {
  const dispatch = useAppDispatch();
  const prompts = useAppSelector((state) => state.PropmtsRedux.prompts);
  const [dragBtn, setDragBtn] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    //if (dragBtn) {
    setDraggingIndex(index);
    //}
  };

  const handleDragOver = (index, event) => {
    event.preventDefault();
    setDragBtn(true);
    if (draggingIndex !== null && draggingIndex !== index) {
      const updatedInputs = [...prompts];
      const draggedItem = updatedInputs[draggingIndex];
      updatedInputs.splice(draggingIndex, 1);
      updatedInputs.splice(index, 0, draggedItem);
      dispatch(changePosition({ newPrompts: updatedInputs }));
      setDraggingIndex(index);
    }
  };

  const handleDrop = () => {
    setDraggingIndex(null);
    setDragBtn(false);
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {prompts.map((prompt, index) => (
        <CardPrompt
          key={prompt.id}
          prompt={prompt}
          index={index}
          dragBtn={dragBtn}
          setDragBtn={setDragBtn}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}
