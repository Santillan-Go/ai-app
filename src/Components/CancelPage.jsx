"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import BackToHome from "./BackToHome";

function CancelPage() {
  // const endDate = "12/12/2024";

  const endDate = useSearchParams().get("endDate") ?? "NOT DATE";

  //console.log(useSearch.get("endDate"));
  return (
    <section className="h-screen w-full p-2 flex flex-col justify-center items-center gap-3  text-white">
      <h1 className="font-bold text-3xl text-center text-green-500">
        Your plan has been cancel succefully
      </h1>

      <div className="w-full flex flex-col gap-1 justify-center items-center">
        <p className="font-bold text-2xl text-center">
          You will have access to the plan's featureas until the
        </p>
        <b className="text-center text-3xl">{endDate}</b>
      </div>

      <BackToHome />
    </section>
  );
}

export default CancelPage;
