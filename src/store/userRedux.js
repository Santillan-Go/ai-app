import { createSlice } from "@reduxjs/toolkit";

const initial = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload.username;
    },
  },
});

export const { updateUsername } = userSlice.actions;

export const userRedux = userSlice.reducer;
