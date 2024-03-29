import { createSlice } from "@reduxjs/toolkit";
import { shopsInitState } from "./shops.init-state";
import { getShopsThunk, setActiveShopThunk } from "./shops.thunk";

const shopsSlice = createSlice({
  name: "shops",
  initialState: shopsInitState,

  extraReducers: (builder) => {
    builder
      .addCase(getShopsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShopsThunk.fulfilled, (state, { payload }) => {
        state.shops = [...payload.shops];
        state.isLoading = false;
      })
      .addCase(getShopsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(setActiveShopThunk.pending, (state) => state)
      .addCase(setActiveShopThunk.fulfilled, (state, { payload }) => {
        state.activeShop = payload;
      })
      .addCase(setActiveShopThunk.rejected, (state, { payload }) => state);
  },
});

export const shopsReducer = shopsSlice.reducer;
