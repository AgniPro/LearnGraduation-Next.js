"use client";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./services/authSlice";
import { authApi } from "./services/auth";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
