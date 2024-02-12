import { createSlice } from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: {
    value: false
  },
  reducers: {
    logged(state) {
      state.value = true;
    },
    loggedOut(state) {
      state.value = false;
    }
  }
});

export const { logged, loggedOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
