import { createSlice } from "@reduxjs/toolkit";

const initial = {
  username: "",
  planName: "Free",
};

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    updateUsername(state, action) {
      state.username = action.payload.username;
    },
    updatePlanName(state, action) {
      state.planName = action.payload.planName;
    },
  },
});

export const { updateUsername, updatePlanName } = userSlice.actions;

export const userRedux = userSlice.reducer;
