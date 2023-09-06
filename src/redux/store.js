"use client"
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"
import paymentReducer from "./paymentSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    payment: paymentReducer,
  },
});
