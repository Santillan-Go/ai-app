import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "english",

  english: {
    config: {
      h1: "USER'S INFORMATION",

      buttonText: "Save",
      buttonText2: "Cancel",
    },
    language: {
      h1: "Preferences",
      label: "Language",
      options: ["SPANISH", "ENGLISH"],
    },
    theme: {
      label: "Theme",
      options: ["default", "blue fade", "dark mode"],
    },
    gretting: {
      timeDay: ["GOOD MORNING!", "GOOD AFTERNOON!", "GOOD NIGHT!"],
    },
    modalCreate: {
      buttonText1: "CREATE",
      buttonText2: "CANCEL",
    },
    modalChange: {
      buttonText1: "Change",
      buttonText2: "Close",
    },
    teacher: {
      h1: "Tutor",
      link: "Start",
      h1_2: "Knowledge",
    },
  },
  spanish: {
    config: {
      h1: "INFORMACIÓN DEL USUARIO",

      buttonText: "Guardar",
      buttonText2: "Cancelar",
    },
    language: {
      h1: "Preferencias",
      label: "Idioma",
      options: ["ESPAÑOL", "INGLÉS"],
    },
    theme: {
      label: "Tema",
      options: ["por defecto", "azul desvanecido", "modo oscuro"],
    },
    gretting: {
      timeDay: ["Buenos días!", "Buenas tardes!", "Buenas noches!"],
    },
    modalCreate: {
      buttonText1: "CREAR",
      buttonText2: "CANCELAR",
    },
    modalChange: {
      buttonText1: "CAMBIAR",
      buttonText2: "CERRAR",
    },

    teacher: {
      h1: "Tutor",
      link: "Empezar",
      h1_2: "Conocimiento",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload.language;
    },
  },
});

export const { changeLanguage } = userSlice.actions;

export const ContentLanguage = userSlice.reducer;

//In the component where you want to use this language:

// import { useSelector } from "react-redux";
