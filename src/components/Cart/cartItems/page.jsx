"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { incrementQuantity, decrementQuantity } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, calculateCartSubtotal, calculateCartQty } from "@/redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItems = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartLocalData = localStorage.getItem("cartItemsLocal");
//   const cartItems = JSON.parse(cartLocalData)
//   console.log(cartItems);
  const handleRemoveFromCart = (id)=>{
    dispatch(removeFromCart(id));  
    dispatch(calculateCartSubtotal()); 
    dispatch(calculateCartQty());
    toast.success("Product Removed From Cart")
  }

  const handleQtyInc = (id)=>{
    dispatch(incrementQuantity(id)); 
    dispatch(calculateCartSubtotal()); 
    dispatch(calculateCartQty());
  }

  const handleQtyDec = (id)=>{
    dispatch(decrementQuantity(id)); 
    dispatch(calculateCartSubtotal()); 
    dispatch(calculateCartQty());
  }


  return cartItems?.map((item) => (
    <div className="flex items-center gap-5 bg-[#266b5d] p-2 rounded-md mb-5" key={item.id}>
      <div className="bg-white p-2 rounded-md">
        <div className="relative w-[70px] h-[70px]">
          <Image src={item.image} alt="Product Image" fill={true} className="object-contain"></Image>
        </div>
      </div>
      <div>
        <div className="flex gap-3">
          <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[170px] sm:max-w-[200px] mb-3">{item.title}</h1>
          <AiOutlineCloseCircle size={25} className="cursor-pointer" 
          onClick={()=>{handleRemoveFromCart(item.id)}}/>
        </div>
        <div className="text-xl flex gap-5 border-2 px-3 border-green-500 items-center w-fit cursor-pointer bg-[#266b5d]">
          <button 
          onClick={() => {handleQtyDec(item.id)}} 
          className="text-center">
            -
          </button>
          <div className="border-x-2 border-green-500 w-8 py-1 text-center">{item.quantity}</div>
          <button 
          onClick={() => {handleQtyInc(item.id)}} 
          className="text-center">
            +
          </button>
        </div>
        <div className="mt-2 flex gap-1">
            <p>{item.quantity}</p>
            <p>x</p>
            <p><span>&#36;</span>{item.price} = </p>
            <p><span>&#36;</span>{Math.round(item.quantity*item.price)}</p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  ));
};

export default CartItems;
