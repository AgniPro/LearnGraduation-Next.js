import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: ""
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      action
    ) => {
      state.user = action.payload.user;
    }
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;