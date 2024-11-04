"use client";
import useTheme from "@/HOOKS/useTheme";
import Link from "next/link";
import React from "react";

function CardTeacher({ id, name, image }) {
  const Theme = useTheme();
  //${Theme.theme === "dark mode" ? `${Theme.children}` : "bg-main-white"}

  const getTextColor = () => {
    if (Theme.theme === "default") return "hover:text-main-purple";

    if (Theme.theme === "blue fade") return "hover:text-blue-900";

    if (Theme.theme === "dark mode") return "hover:text-gray-600";
  };

  //#d3d3d3 or #a9a9a9
  return (
    <Link
      href={`/teacher/${id}`}
      className={` ${getTextColor()} flex flex-col items-center gap-2  sm:w-250px sm:h-275px w-130px  hover:cursor-pointer container-image text-slate-300`}
    >
      <div
        className={`${
          Theme.theme === "dark mode"
            ? `${Theme.children}`
            : "bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10"
        } w-full h-full p-1 sm:p-4 rounded-lg shadow-md overflow-hidden`}
      >
        <img
          className="object-cover w-full h-32 rounded-t-lg rounded-b-lg image-zoom "
          src={image}
          alt=""
        />

        <p className="font-semibold text-16px sm:text-20px text-center title-card">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default CardTeacher;
