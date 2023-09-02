import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const tempProduct = {...action.payload}

      const itemIndex = state.cartItems.findIndex((item)=> item.id == action.payload.id)
      if(itemIndex >= 0){ //product exist already in cart
        state.cartItems[itemIndex].quantity += 1;
      }else{ // product does not exist already in cart
        state.cartItems.push(tempProduct);
      }
      // console.log("This is cartSlice p-data", tempProduct)
    },
    removeFromCart: (state, action) => {
      
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
