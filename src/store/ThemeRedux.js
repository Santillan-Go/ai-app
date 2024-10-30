import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "default", //deafult, blue-fade and dark mode
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;

export const ThemeRedux = ThemeSlice.reducer;
