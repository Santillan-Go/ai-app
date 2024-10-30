"use client";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
function ButtonFile({ hadleResetImg, onSelectFile, resetText, disabled }) {
  return (
    <>
      <label
        htmlFor="fileInput"
        className={`custom-file-upload rounded-full bg-gray-medium text-4xl ${
          disabled && "cursor-not-default pointer-events-none  opacity-50 "
        }`}
      >
        <ImageIcon fontSize="inherit" className="text-4xl font-bold" />
      </label>

      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="fileInput"
        onChange={(e) => {
          hadleResetImg();
          onSelectFile(e);
          resetText();
          e.target.value = null; // Reset the input field
        }}
      />
    </>
  );
}

export default ButtonFile;
