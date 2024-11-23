"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useValidatePlan from "@/HOOKS/useValidatePlan";
import useLanguage from "@/HOOKS/useLanguage";
function GoToPlan({ from = "/" }) {
  const router = useRouter();
  const { money } = useValidatePlan();
  const { spanish } = useLanguage();

  return (
    <button
      onClick={() => router.push(`/plans?referrer=${from}`)}
      className={`w-44 text-black rounded-3xl p-1 text-xl font-semibold bg-slate-100 ${
        money ? "" : "upgrade_btn_wave"
      }`}
    >
      {money
        ? spanish
          ? "Ver planes"
          : "See plans"
        : spanish
        ? "Mejorar✨"
        : "Upgrade✨"}
    </button>
  );
}

export default GoToPlan;
