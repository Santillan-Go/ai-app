"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { changePosition, deletePrompt, updatePrompt } from "@/store/promptClip";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
export default function CardPrompt({
  prompt,
  index,
  dragBtn,
  setDragBtn,
  onDragOver,
  onDragStart,
  onDrop,
}) {
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const [newPrompt, setNewPrompt] = useState(prompt.name);

  const handleEdit = (id, newprompt) => {
    if (newprompt.length > 0) {
      dispatch(updatePrompt({ id, newprompt }));
      setEdit(false);
    }
  };

  const handleDelete = (id) => {
    dispatch(deletePrompt({ id }));
  };

  return (
    <div
      draggable={true}
      onDragStart={(e) => {
        onDragStart(index);
      }}
      onDragOver={(event) => onDragOver(index, event)}
      onDrop={(e) => {
        onDrop();
      }}
      key={prompt.id}
      className={`btn-drag flex flex-col justify-between gap-2 bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10 p-2 rounded-xl w-[200px] ${
        dragBtn ? "dragging cursor-grabbing" : "cursor-grab"
      }`}
    >
      <button
        onClick={(e) => {
          // Handle right click
          if (e.button === 2) {
            e.preventDefault();
            setDragBtn(!dragBtn);
          }
        }}
        onMouseDown={(e) => {
          if (e.button === 0) {
            // Left click
            e.preventDefault();
            if (false) {
              setDragBtn(true);
            }
          }
        }}
        onDoubleClick={() => setDragBtn(!dragBtn)}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            const touch = e.touches[0];
            const touchDuration = 500; // 500ms for long press

            const timer = setTimeout(() => {
              setDragBtn(!dragBtn);
            }, touchDuration);

            // Clear timer if touch ends early
            e.target.addEventListener("touchend", () => clearTimeout(timer), {
              once: true,
            });
          }
        }}
        onContextMenu={(e) => e.preventDefault()} // Prevent context menu
        className={`btn-drag w-8 text-2xl ${
          dragBtn ? "dragging" : ""
        } text-black absolute top-1 right-1`}
      >
        <DragIndicatorIcon className="text-white" />
      </button>

      {edit ? (
        <input
          type="text"
          value={newPrompt}
          onChange={(e) => setNewPrompt(e.target.value)}
        />
      ) : (
        <b className="text-white text-xs">{prompt.name}</b>
      )}

      {edit ? (
        <article className="flex gap-2 justify-center">
          <button
            className="text-white"
            onClick={() => handleEdit(prompt.id, newPrompt)}
          >
            <EditIcon />
          </button>
          <button className="text-white" onClick={() => setEdit(!edit)}>
            <CloseIcon />
          </button>
        </article>
      ) : (
        <article className="flex gap-2 justify-center">
          <button
            className="text-white"
            onClick={() => handleDelete(prompt.id)}
          >
            <DeleteIcon />
          </button>
          <button className="text-white" onClick={() => setEdit(!edit)}>
            <EditIcon />
          </button>
        </article>
      )}
    </div>
  );
}
