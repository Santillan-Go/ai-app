"use client";
import ClearIcon from "@mui/icons-material/Clear";

function ButtonCancelText({ hadleResetImg, resetText, imgRef }) {
  return (
    <button
      className="close_modal_image"
      onClick={() => {
        hadleResetImg();
        resetText();
        imgRef.current = null;
      }}
    >
      <ClearIcon fontSize="inherit" />
    </button>
  );
}

export default ButtonCancelText;
