"use client";
import { signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "@/store/store";
// import { deleteAllState } from "@/store/messagesRedux";
import { updateUsername } from "@/store/userRedux";
import useLanguage from "@/HOOKS/useLanguage";
function BtnLogOut() {
  const language = useLanguage();
  const dispatch = useAppDispatch();
  return (
    <button
      className="p-2  text-2x1 text-center flex gap-2 w-44 bg-white text-black rounded-3xl "
      onClick={() => {
        signOut({ redirect: true, callbackUrl: "/" });

        // dispatch(deleteAllState());
        dispatch(updateUsername({ username: "" }));
      }}
    >
      <p className="font-semibold ">
        {" "}
        {language.spanish ? "Cerrar Sessión" : "Log out"}
      </p>{" "}
      <LogoutIcon />
    </button>
  );
}

export default BtnLogOut;
