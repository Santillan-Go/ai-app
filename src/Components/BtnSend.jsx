import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
function BtnSend({ input }) {
  return (
    <button
      type="submit"
      className="rounded-full text-[28px] bg-gray-medium  self-end text-black w-11 h-11 absolute bottom-1 right-1 "
      disabled={!input}
    >
      <SendRoundedIcon
        fontSize="inherit"
        className="text-[28px] font-bold text-inherit  rotate-45-mine mr-auto ml-1 mt-auto mb-3"
      />
    </button>
  );
}

export default BtnSend;
