import { createSlice } from "@reduxjs/toolkit";

const getGrandTotal = (total, item) => total + item.price;

const cart = createSlice({
  name: "cart",
  initialState: { items: [], grandTotal: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newCartItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => newCartItem.id === item.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.quantity * existingCartItem.price;
      } else {
        state.items.push({
          ...newCartItem,
          quantity: 1,
          totalPrice: newCartItem.price,
        });
        state.grandTotal = state.items.reduce(getGrandTotal, 0);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);
      state.grandTotal = state.items.reduce(getGrandTotal, 0);
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
