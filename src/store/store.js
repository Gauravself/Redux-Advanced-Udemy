import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "../Slice/CartItemSlice";
import UISlice from "../Slice/UISlice";

const store = configureStore({
  reducer: {
    ui: UISlice.reducer,
    cart: CartItemSlice.reducer,
  },
});

export default store;
