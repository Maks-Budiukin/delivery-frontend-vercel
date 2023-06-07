import { createSlice } from "@reduxjs/toolkit";
import { productsInitState } from "./products.init-state";
import {
  getProductsThunk,
  AddToCartThunk,
  RemoveFromCartThunk,
  changeItemCountThunk,
  ClearCartThunk,
  createOrderThunk,
} from "./products.thunk";

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitState,

  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        state.products = [...payload.products];
        state.isLoading = false;
      })
      .addCase(getProductsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(AddToCartThunk.pending, (state) => state)
      .addCase(AddToCartThunk.fulfilled, (state, { payload }) => {
        state.cart = [...state.cart, payload];
        state.enabledShop = payload.shopID;
      })
      .addCase(AddToCartThunk.rejected, (state, { payload }) => state)

      .addCase(RemoveFromCartThunk.pending, (state) => state)
      .addCase(RemoveFromCartThunk.fulfilled, (state, { payload }) => {
        state.cart = payload;
        if (payload.length === 0) {
          state.enabledShop = null;
        }
      })
      .addCase(RemoveFromCartThunk.rejected, (state, { payload }) => state)

      .addCase(ClearCartThunk.pending, (state) => state)
      .addCase(ClearCartThunk.fulfilled, (state, { payload }) => {
        state.cart = payload;
        state.enabledShop = null;
      })
      .addCase(ClearCartThunk.rejected, (state, { payload }) => state)

      .addCase(changeItemCountThunk.pending, (state) => state)
      .addCase(changeItemCountThunk.fulfilled, (state, { payload }) => {
        state.cart = payload;
      })
      .addCase(changeItemCountThunk.rejected, (state, { payload }) => {})

      .addCase(createOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createOrderThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const productsReducer = productsSlice.reducer;
