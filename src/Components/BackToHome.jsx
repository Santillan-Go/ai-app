"use client";
import React from "react";
import { useRouter } from "next/navigation";
import HouseIcon from "@mui/icons-material/House";
function BackToHome() {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/");
    router.refresh();
  };
  return (
    <button
      onClick={handleGoBack}
      className="text-black text-xl rounded-3xl bg-white font-bold flex gap-1 "
    >
      <HouseIcon className="w-6 h-6 text-black" />
      <p className="text-black"> Back to Home </p>
    </button>
  );
}

export default BackToHome;
