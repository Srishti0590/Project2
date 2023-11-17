import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import uiReducer from "./slices/ui";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: { product: productReducer, ui: uiReducer, cart: cartReducer },
});

export default store;
