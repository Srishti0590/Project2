import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: { allProducts: [] },
  reducers: {
    updateProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const productActions = product.actions;

export default product.reducer;
