"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { setTheme } from "@/store/ThemeRedux";

function ThemeUser({ label, options, language }) {
  const dispatch = useAppDispatch();
  const Theme = useAppSelector((state) => state.ThemeRedux.theme);
  const handleChange = (event) => {
    // console.log(event.target.value);

    const value = event.target.value.toLocaleUpperCase();

    const defa = ["DEFAULT", "por defecto"];
    const dark = ["DARK MODE", "modo oscuro"];
    const blue = ["BLUE FADE", "azul desvanecido"];
    //"por defecto", "azul desvanecido", "modo oscuro"
    // ["dafult", "blue fade", "dark mode"]

    if (defa.includes(value)) {
      dispatch(setTheme({ theme: "default" }));
    }
    if (dark.includes(value)) {
      dispatch(setTheme({ theme: "dark mode" }));
    }
    if (blue.includes(value)) {
      dispatch(setTheme({ theme: "blue fade" }));
    }
  };

  const bg = {
    "por defecto": "default".toLocaleUpperCase(),
    "modo oscuro": "dark mode".toLocaleUpperCase(),
    "azul desvanecido": "blue fade".toLocaleUpperCase(),
  };

  return (
    <section className=" flex flex-col gap-4">
      <label
        for="theme"
        className="text-gray-500  text-xl sm:text-2xl font-bold"
      >
        {label}:
      </label>
      <select
        onChange={handleChange}
        value={Theme.toLocaleUpperCase()}
        name=""
        id="theme"
        className="rounded-3xl p-1 text-black"
      >
        {options.map((option) => (
          <option
            className="p-2 text-black font-bold border border-main-purple"
            key={option}
            value={language ? bg[option] : option.toLocaleUpperCase()} // Proper value mapping
          >
            {option.toLocaleUpperCase()}
          </option>
        ))}
      </select>
    </section>
  );
}

export default ThemeUser;
