"use client";

import React from "react";
import { useRouter } from "next/navigation";
function GoToPlan({ from = "/" }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/plans?referrer=${from}`)}
      className="w-44 text-black rounded-3xl p-1 text-xl font-semibold bg-slate-100 upgrade_btn_wave "
    >
      Upgrade✨
    </button>
  );
}

export default GoToPlan;
