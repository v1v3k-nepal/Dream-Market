"use client"
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from 'next/navigation';
// import {BsFillPatchCheckFill} from "react-icons/bs"
const PaymentSuccess = () => {
  const router = useRouter();
  const paymentData = useSelector((state) => state.payment.paymentData);
  // console.log(paymentData)
  useEffect(()=>{
    if(!paymentData.amount) router.push("/")
  })
  return (
    <div className='flex flex-col border-2 border-green-500 rounded-2xl p-5 my-5 md:my-8 max-w-[900px] mx-auto'>
      <AiOutlineCloseCircle size={25} className="self-end cursor-pointer" onClick={()=> router.push("/")}/>
      <div className='flex justify-center text-green-500'>
        <i className='border-4 border-green-500 rounded-[50%]  px-[30px] leading-[130px] sm:px-[38px] sm:leading-[180px] text-[100px] sm:text-[140px]'>✓</i>
      </div>
      <h1 className='text-center font-bold text-3xl mt-2'>Success</h1> 
          <p className='text-center text-base sm:text-[18px]'>We received your purchase request <br/> we&apos;ll be in touch shortly!</p>
          <div className='mx-auto text-base sm:text-[18px] border-2 border-green-600 p-2 rounded-md mt-5'>
            <p>Transaction By: {paymentData.mobile}</p>
            <p>Amount Paid: &#8377;{paymentData.amount/100}</p>
            <p>Purchase Order Name: {paymentData.purchase_order_name}</p>
            <p>Purchase OrderId: {paymentData.purchase_order_id}</p>
            <p>TransactionId: {paymentData.transaction_id}</p>
          </div>
    </div>
  )
}

export default PaymentSuccess;