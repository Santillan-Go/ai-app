import { createSlice } from "@reduxjs/toolkit";

const initial = {
  username: "",
  planName: "Free",
  endDate: "",
  subID: "",
  active: "",
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
    updateSubID(state, action) {
      state.subID = action.payload.subID;
    },
    updateActive(state, action) {
      state.active = action.payload.active;
    },
  },
});

export const {
  updateUsername,
  updatePlanName,
  updateEndDate,
  updateSubID,
  updateActive,
} = userSlice.actions;

export const userRedux = userSlice.reducer;
