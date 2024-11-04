"use client";

import React from "react";
import BackTo from "./BackTo";
import FormRegister from "./FormUser";
import ButtonGoogle from "./ButtonGoogle";
import Link from "next/link";
import useTheme from "@/HOOKS/useTheme";

function Register() {
  const Theme = useTheme();
  return (
    <article className="h-screen w-full p-3  overflow-y-auto">
      <BackTo LINK={"/"} />

      <h2 class="text-3xl font-bold text-center mb-1  text-white">
        Create Your Account
      </h2>
      <div
        className={`flex flex-col w-full sm:w-[35%] items-center mr-auto ml-auto    rounded-3xl shadow-2xl p-3 ${
          Theme.theme === "default" || Theme.theme === "blue fade"
            ? "shadow-slate-950 bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10"
            : "shadow-slate-700"
        } gap-6`}
      >
        <FormRegister />
        <ButtonGoogle action={"Register with Google"} />
        {/* <p className="text-gray-600 text-sm">
          Already have an account? <a href="/login">Sign In</a>
        </p> */}
        <p class="text-center text-gray-500 mt-1">
          Already have an account?
          <Link href="/auth/signin" className="text-white hover:underline">
            sign in here
          </Link>
        </p>
      </div>
    </article>
  );
}

export default Register;
