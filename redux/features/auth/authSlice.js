import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistation: (state, action) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (
      state,
      action
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.user = "";
      state.token = "";
    },
    
  },
});

export const { userRegistation, userLoggedIn, userLoggedOut } =
  authSlice.actions;
export default authSlice.reducer;
