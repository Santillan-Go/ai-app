"use client";
import { useAppSelector } from "@/store/store";

function useLanguage() {
  const language = useAppSelector((state) => state.ContentLanguage);

  return {
    ...(language.language === "spanish" ? language.spanish : language.english),
    spanish: language.language === "spanish" ? true : false,
    languageName: language.language,
  };
}

export default useLanguage;
