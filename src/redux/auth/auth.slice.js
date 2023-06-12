import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.init-state";
import {
  getOrdersThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  regThunk,
} from "./auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitState,

  extraReducers: (builder) => {
    builder
      .addCase(regThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(regThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.id = payload._id;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.address = payload.address;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(logoutThunk.pending, (state) => state)
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = null;
        state.user.id = "";
        state.user.name = "";
        state.user.email = "";
        state.user.phone = "";
        state.user.address = "";
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => state)

      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.id = payload._id;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.address = payload.address;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.token = null;
      })

      .addCase(getOrdersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrdersThunk.fulfilled, (state, { payload }) => {
        state.user.orders = [...payload];
        state.isLoading = false;
      })
      .addCase(getOrdersThunk.rejected, (state, { payload }) => state);
  },
});

export const authReducer = authSlice.reducer;
