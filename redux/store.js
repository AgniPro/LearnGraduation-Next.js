"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const initializeApp = async () => {
  try {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
    await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
};
initializeApp();
