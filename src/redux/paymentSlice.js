"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentData: [],
  paymentStatus: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentData: (state, action) => {
      state.paymentData = action.payload;
    },
    setPaymentStatus: (state, action) =>{
      state.paymentStatus = action.payload
    }
  },
});

export const { setPaymentData, setPaymentStatus } = paymentSlice.actions;
export default paymentSlice.reducer;