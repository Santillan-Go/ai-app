"use client";

import { changeLanguage } from "@/store/ContentRedux";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";

export default function LanguageUser({ label, options, languageName }) {
  const language = useAppSelector((state) => state.ContentLanguage.language);
  const dispatch = useAppDispatch();
  const handleChange = (event) => {
    const selected = event.target.value.toLocaleLowerCase();

    const spanish = ["spanish", "español"];

    const english = ["english", "inglés"];
    if (spanish.includes(selected)) {
      dispatch(changeLanguage({ language: "spanish" }));
    }

    if (english.includes(selected)) {
      dispatch(changeLanguage({ language: "english" }));
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <label
        for="language"
        className="text-gray-500  text-xl sm:text-2xl font-bold"
      >
        {label}:
      </label>
      <select
        name=""
        id="language"
        className="rounded-3xl p-1 text-black"
        onChange={handleChange}
        value={languageName}
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option.toLocaleUpperCase()}
          </option>
        ))}
        {/* <option value="system">System Mode</option> */}
      </select>
    </section>
  );
}
