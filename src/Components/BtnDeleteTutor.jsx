"use client";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deletetutor } from "@/store/apiCalls";
import { useRouter } from "next/navigation";
import useTheme from "@/HOOKS/useTheme";
import { useSession } from "next-auth/react";

function BtnDeleteTutor({ id }) {
  // const userID = useAppSelector((state) => state.userRedux.id);

  const { data: session, status } = useSession();

  const userID = session?.user?.id || "";
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    router.push("/");
    router.refresh("/");
    await deletetutor({ _id: id, dispatch, userID });
  };

  const Theme = useTheme();

  const getColorText = () => {
    if (Theme.theme === "default") return "gradient-container";
    if (Theme.theme === "blue fade") return "bg-blue-900 rounded-full";
    if (Theme.theme === "dark mode") return " bg-gray-dark rounded-full";
  };
  return (
    <button
      onClick={handleDelete}
      className={`${getColorText()} w-11 h-11 rounded-full flex justify-center items-center  text-center`}
    >
      <DeleteOutlineIcon className="w-9 h-9" />
    </button>
  );
}

export default BtnDeleteTutor;
