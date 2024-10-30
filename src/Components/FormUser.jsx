"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit = async (data) => {
    // FINISH THIS FUNCTION
    const { confirmpassword: _, ...body } = data;

    if (data.confirmpassword != body.password) {
      return setError("Password do not match");
    }
    // /api/user
    setError("");

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    //HANDLE ERROR

    if (!response.ok) {
      const json = await response.json();
      setError(json.message);
    }
    //RENDIRE TO /auth/signin
    //const resJSON = await res.json();
    router.push("/auth/signin");
  };

  /*
  {errors.username && (
        <span className="text-red-600 font-bold block text-center">
          {errors.username.message || ""}
        </span>
      )}*/

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-4/5">
      <label htmlFor="username" className="text-gray-400 font-bold block mb-1">
        Username
      </label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        className=" bg-gray-pale  rounded-2xl w-full text-black p-1 pl-2 text-2xl mb-2 block "
        {...register("username", {
          required: {
            value: true,
            message: "username is required",
          },
          minLength: {
            value: 3,
            message: "username must be at least 3 characters",
          },
        })}
      />
      {errors.username && (
        <span className="text-red-600 font-bold block text-center">
          {errors.username.message || ""}
        </span>
      )}
      {/*<span className="text-red-600 font-bold block text-center">*/}
      <label htmlFor="email" className="text-gray-400 font-bold block mb-1">
        Email
      </label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        className=" bg-gray-pale  rounded-2xl w-full text-black p-1 pl-2 text-2xl mb-2 block "
        {...register("email", {
          required: {
            value: true,
            message: "email is required",
          },
          minLength: {
            value: 3,
            message: "email must be at least 3 characters",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-600 font-bold block text-center">
          {errors.email.message || ""}
        </span>
      )}

      <label htmlFor="password" className="text-gray-400 font-bold block mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        className=" bg-gray-pale  rounded-2xl w-full  text-black p-1 pl-1 text-2xl mb-2 block"
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />
      {errors.password && (
        <span className="text-red-600 font-bold block text-center">
          {errors.password.message}
        </span>
      )}
      <label
        htmlFor="confirmPassword"
        className="text-gray-400 font-bold block mb-1"
      >
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        className=" bg-gray-pale rounded-2xl w-full  text-black p-1 pl-2 text-2xl mb-2 block"
        {...register("confirmpassword", {
          required: {
            value: true,
            message: "Confirm Password is required",
          },
        })}
      />

      {errors.confirmpassword && (
        <span className="text-red-600 font-bold block text-center ">
          {errors.confirmpassword.message}
        </span>
      )}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <input
          type="submit"
          value={"Register"}
          className="bg-white text-gray-900 font-bold text-2xl pl-2 hover:cursor-pointer  text-center  rounded p-1 ml-auto mr-auto block hover:bg-slate-300  hover:text-gray-800 "
        />
        {error && (
          <p className="text-red-500 font-bold text-center text-2xl w-full ">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

export default FormRegister;

export function FormLogin() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    console.log(res);
    if (res.error) {
      setError(res.error);
      return;
    }
    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" ">
      <label htmlFor="email" className="text-gray-400 font-bold block mb-1">
        Email
      </label>
      <input
        type="text"
        autoComplete="off"
        id="email"
        className=" bg-gray-pale  rounded-2xl w-full text-black  p-1 pl-1 text-2xl mb-2 block "
        {...register("email", {
          required: {
            value: true,
            message: "email is required",
          },

          minLength: {
            value: 3,
            message: "email must be at least 3 characters",
          },

          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-600 font-bold block text-center">
          {errors.email.message || ""}
        </span>
      )}
      <label htmlFor="password" className="text-gray-400 font-bold block mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        className=" bg-gray-pale  rounded-2xl w-full text-black  p-1 pl-1 text-2xl mb-2 block "
        {...register("password", {
          required: {
            value: true,
            message: "Password is required",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />
      {errors.password && (
        <span className="text-red-600 font-bold block text-center">
          {errors.password.message}
        </span>
      )}
      <input
        type="submit"
        value={"Sign In"}
        className="bg-white text-gray-900 font-bold text-2xl   hover:cursor-pointer w-1/2 text-center  rounded p-1 ml-auto mr-auto block hover:bg-slate-300  hover:text-gray-800  "
      />
      {error && (
        <p className="text-red-500 font-bold text-center text-2xl w-full ">
          {error}
        </p>
      )}
    </form>
  );
}
