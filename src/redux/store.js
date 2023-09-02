"use client"
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import quantityReducer from "./quantitySlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    quantity: quantityReducer,
  },
});
