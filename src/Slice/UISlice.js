import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toogle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice;
