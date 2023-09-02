"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartSubtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const tempProduct = {...action.payload}
      const itemIndex = state.cartItems.findIndex((item)=> item.id == action.payload.id)
      if(itemIndex >= 0){ //product exist already in cart
        state.cartItems[itemIndex].quantity += tempProduct.quantity;
        // state.cartItems[itemIndex].quantity += 1;
      }else{ // product does not exist already in cart
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItemsLocal",JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productIdToRemove);
      localStorage.setItem("cartItemsLocal",JSON.stringify(state.cartItems));
    },
    incrementQuantity : (state, action) => {
      let items = state.cartItems
      let index = items.findIndex((item)=> item.id === action.payload);

        items[index].quantity += 1;
        state.cartItems = items;

        // localStorage.setItem("cartItemsLocal",JSON.stringify(state.cartItems));
      },
      decrementQuantity : (state, action) => {
        let items = state.cartItems
        let index = items.findIndex((item)=> item.id === action.payload);
          
          if(items[index].quantity ==1){
            // Do nothing
          }else{
            items[index].quantity -=1;
          }
          state.cartItems = items;

          // localStorage.setItem("cartItemsLocal",JSON.stringify(state.cartItems));
        },
    calculateCartSubtotal: (state, action)=>{
      let subtotal = 0;
      for (const item of state.cartItems) {
        subtotal += item.price * item.quantity;
      } 
      state.cartSubtotal = subtotal;  
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, calculateCartSubtotal } = cartSlice.actions;
export default cartSlice.reducer;
