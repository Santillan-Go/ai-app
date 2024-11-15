import { createSlice } from "@reduxjs/toolkit";

const initial = {
  username: "",
  planName: "Free",
  endDate: "",
  subID: "",
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
  },
});

export const { updateUsername, updatePlanName, updateEndDate, updateSubID } =
  userSlice.actions;

export const userRedux = userSlice.reducer;
