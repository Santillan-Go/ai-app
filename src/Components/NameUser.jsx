"use client";

import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import { updateusername } from "@/store/apiCalls";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSession } from "next-auth/react";
function NameUser({ h1, buttonText, user, buttonText2 }) {
  const { data: session, status } = useSession();

  const userID = session?.user?.id || "";

  const [Form, setForm] = useState(null);
  const [username, setUsername] = useState(user || "");
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setForm(!Form);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm(null);

    await updateusername({ username, dispatch, userID });
  };
  return (
    <section className="shadow-2xl  rounded-3xl p-2 sm:p-3 flex flex-col items-center">
      <h1 className="text-gray-500 text-2xl text-center sm:text-3xl font-bold">
        {h1}
      </h1>
      {Form ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-black"
        >
          <input
            type="text"
            value={username}
            onChange={handleChange}
            className="pl-1 p-1 rounded-3xl"
          />
          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-3xl p-1 w-24 font-bold text-center bg-main-white border-2 border-main-green text-main-green"
            >
              {buttonText}
            </button>
            <button
              type="button"
              className="rounded-3xl p-1 w-24 font-bold text-center bg-main-white border-2 border-red-700 text-red-700"
              onClick={handleClick}
            >
              {buttonText2}
            </button>
          </div>
        </form>
      ) : (
        <div className="flex gap-3">
          <button onClick={handleClick}>
            <EditIcon className="w-8 h-8 text-main-white" />
          </button>

          <h1 className="text-main-white font-bold text-2xl sm:text-3xl ">
            {username}
          </h1>
        </div>
      )}
    </section>
  );
}

export default NameUser;
