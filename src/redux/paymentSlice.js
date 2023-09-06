"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentData: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentData: (state, action) => {
      state.paymentData = action.payload;
    },
  },
});

export const { setPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;