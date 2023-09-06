import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {BsCartX} from "react-icons/bs"
import Link from 'next/link'
import CartItems from "./cartItems/page"
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({setShowCart}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);

const handlePayment = async (cartItems, cartSubtotal)=>{

  const purchaseOrderId = "testOrder123";
  const payload = {
    "return_url": "http://localhost:3000/payment",
    "website_url": "http://localhost:3000",
    "amount": cartSubtotal * 100, // Convert to paisa (assuming cartSubTotal is in rupees)
    "purchase_order_id": purchaseOrderId,
    "purchase_order_name": "Product Name",
    // customer_info: customerInfo,
    "customer_info" : {
      "name": "Vivek Nepal",
      "email": "example@gmail.com",
      "phone": "9811496763"
    },

    "product_details": cartItems.map((item) => ({
      "identity": item.id,
      "name": item.title,
      "total_price": item.quantity * item.price * 100,
      "quantity": item.quantity,
      "unit_price": item.price * 100,
    })),
  };

  const response = await fetch("/api/initiatePayment", {
    method: "POST",
    body: JSON.stringify(payload)
  })
  const data = await response.json();

  if (data.payment_url !== undefined) {
    window.location.href = data.payment_url;
  } else {
    toast.error("Amount must be between Rs 10 to 1000 during Test")
    // console.log(data);
  }

  localStorage.setItem("pidx", data.pidx)
  // console.log(localStorage.getItem("pidx"))
  // console.log("Client Page",data.payment_url)
}
  return (
    <div className='fixed top-0 right-0 w-full h-full sm:w-[400px] bg-[#34a96f] transition-all px-2 sm:px-5 py-5 z-10 flex flex-col'>
      <div className='flex justify-between mb-5'>
        <h1 className='font-bold text-2xl text-white'>Shopping Cart:</h1>
        <div onClick={()=>setShowCart(false)} className='cursor-pointer'><AiOutlineCloseCircle size={30} className='text-white'/></div>
      </div>

      {!cartItems.length ? (<div className='flex flex-col justify-center gap-5 mb-5'>
        <BsCartX size={250} className="mx-auto text-white" />
        <h1 className='font-bold text-2xl text-center text-white'>Cart is Empty !! </h1>
        <Link href="/"><button className='bg-[#266b5d] w-full py-3 text-white'>Start Shopping</button></Link>
      </div>): <div className='sm:max-h-[70vh] overflow-scroll'><CartItems/></div>}

      <div className='mt-auto'>
        <h1 className='font-bold mb-5 text-2xl text-white'>Subtotal: <span>&#36;</span>{Math.round(cartSubtotal)}</h1>
        <button className='bg-[#266b5d] w-full py-3 text-white' onClick={()=>handlePayment(cartItems, cartSubtotal)}>CheckOut</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Cart