import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {BsCartX} from "react-icons/bs"
import Link from 'next/link'
import CartItems from "./cartItems/page"
import { useSelector } from "react-redux";

const Cart = ({setShowCart}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className='fixed top-0 right-0 w-full h-full sm:w-[400px] bg-[#34a96f] transition-all px-2 sm:px-5 py-5 z-10'>
      <div className='flex justify-between mb-5'>
        <h1 className='font-bold text-2xl'>Shopping Cart:</h1>
        <div onClick={()=>setShowCart(false)} className='cursor-pointer'><AiOutlineCloseCircle size={30}/></div>
      </div>

      {!cartItems.length ? (<div className='flex flex-col justify-center gap-5 mb-5'>
        <BsCartX size={250} className="mx-auto" />
        <h1 className='font-bold text-2xl text-center'>Cart is Empty !! </h1>
        <Link href="/"><button className='bg-[#266b5d] w-full py-3'>Start Shopping</button></Link>
      </div>): <CartItems/>}

      <div>
        <h1 className='font-bold mb-5 text-2xl'>Subtotal: </h1>
        <button className='bg-[#266b5d] w-full py-3'>CheckOut</button>
      </div>
    </div>
  )
}

export default Cart