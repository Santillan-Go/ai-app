"use client";

import ErrorIcon from "@mui/icons-material/Error";
function MessageError({ callAgain, lastMessageOne }) {
  return (
    <div className="text-center  bg-red-950 flex flex-col gap-4 p-3  w-80 h-60 rounded-3xl shadow-lg shadow-red-600 self-end items-center mb-4">
      <div className="  text-2xl font-bold text-white ">
        <ErrorIcon className="text-white w-10 h-10  shadow-lg rounded-full shadow-red-600" />
        <p className="font-bold"> Error:</p>
        <p> Por favor, intente otra vez</p>
      </div>
      <button
        onClick={(event) => callAgain({ message: lastMessageOne })}
        className="text-2xl w-4/5  text-white font-bold rounded-3xl p-1 bg-red-950 hover:bg-red-700 hover:text-gray-300  shadow-md shadow-red-600"
      >
        <p className=" animate-bounce"> Intentar otra vez</p>
      </button>
    </div>
  );
}

export default MessageError;
