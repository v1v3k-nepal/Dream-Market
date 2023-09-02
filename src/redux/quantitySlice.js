import { createSlice } from "@reduxjs/toolkit";

const quantitySlice = createSlice({
  name: "quantity",
  initialState: 1,
  reducers: {
    incrementQuantity: (state) => {
      return state + 1;
    },
    decrementQuantity: (state) => {
      if (state == 1) {
        return state;
      }
      return state - 1;
    },
    setQuantity: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} = quantitySlice.actions;

export default quantitySlice.reducer;
