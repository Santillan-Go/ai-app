"use client";
import React from "react";
import BackTo from "./BackTo";
import { useSearchParams } from "next/navigation";
function BackToCustom() {
  // const router = useRouter();
  const searchParams = useSearchParams();

  const referrer = searchParams.get("referrer");
  //new URLSearchParams(router.asPath);
  const handleGoBack = () => {
    if (referrer === "config") {
      return "/config";
    } else if (referrer && referrer.includes("chat")) {
      //IMPROVE THIS ONE-------
      return referrer;
    } else {
      return "/";
    }
  };
  return (
    <div className="fixed top-2 left-2 w-auto h-auto">
      <BackTo LINK={handleGoBack()}></BackTo>
    </div>
  );
}

export default BackToCustom;
