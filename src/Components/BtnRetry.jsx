import ReplayIcon from "@mui/icons-material/Replay";

import React from "react";

function BtnRetry({ retryFetch }) {
  return (
    <button
      className="group p-2  rounded-3xl h-9 flex justify-center items-center border border-red-600 hover:border-red-800 hover:border-2 hover:scale-105 transition-all"
      onClick={retryFetch}
    >
      <ReplayIcon className="w-6 h-6 text-red-600 mr-1  group-hover:text-red-800 group-hover:cursor-pointer" />
      <p className="text-xl font-semibold text-white group-hover:text-slate-300">
        Intentar otra vez
      </p>
    </button>
  );
}

export default BtnRetry;
