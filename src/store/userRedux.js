import { createSlice } from "@reduxjs/toolkit";

const initial = {
  username: "",
  planName: "Free",
  endDate: "",
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
    updateEndDate(state, action) {
      state.endDate = action.payload.endDate;
    },
  },
});

export const { updateUsername, updatePlanName, updateEndDate } =
  userSlice.actions;

export const userRedux = userSlice.reducer;
