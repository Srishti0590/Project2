import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: { isLoading: false, userMessage: "success", searchTerm: "" },
  reducers: {
    updateUI(state, action) {
      state.isLoading = action.payload.isLoading;
      state.userMessage = action.payload.userMessage || "success";
      state.searchTerm = action.payload.searchTerm || "";
    },
  },
});

export const uiActions = ui.actions;

export default ui.reducer;
