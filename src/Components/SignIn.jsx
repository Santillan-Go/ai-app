"use client";
import React from "react";
import BackTo from "./BackTo";
import { FormLogin } from "./FormUser";
import ButtonGoogle from "./ButtonGoogle";
import Link from "next/link";
import useTheme from "@/HOOKS/useTheme";

function SignIn() {
  const Theme = useTheme();
  return (
    <article className="min-h-screen w-full p-3  ">
      <BackTo LINK={"/"} />
      <h1 class="text-white text-3xl font-bold text-center mb-1">
        Welcome Back! Sign In to Your Account
      </h1>
      <div
        className={`flex flex-col  w-full sm:w-35% items-center mr-auto ml-auto mt-16 rounded-3xl gap-6  shadow-2xl p-3 ${
          Theme.theme === "default" || Theme.theme === "blue fade"
            ? "shadow-slate-950 bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10"
            : "shadow-slate-700 overflow-y-auto"
        }`}
      >
        <FormLogin />
        <ButtonGoogle action={"Sign in with Google"} />
        <p class="text-center text-gray-500 mt-1">
          Do not have an account?
          <Link href="/auth/register" className="text-white hover:underline">
            Sign Up Now!
          </Link>
        </p>
      </div>
    </article>
  );
}

export default SignIn;
