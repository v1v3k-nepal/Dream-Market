"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import {IoCloseCircleOutline} from "react-icons/io5"
import { useSelector } from 'react-redux';

const PaymentFailure = () => {
  const router = useRouter()
  const paymentStatus = useSelector((state)=> state.payment.paymentStatus)
  return (
    <div className='flex flex-col border-2 border-red-500 rounded-2xl p-5 my-5 md:my-8 max-w-[900px] mx-auto'>
    <AiOutlineCloseCircle size={25} className="self-end cursor-pointer" onClick={()=> router.push("/")}/>
    <div>
      <IoCloseCircleOutline size={200} className="mx-auto text-red-500"/>
    </div>
    <h1 className='text-center font-bold text-3xl mt-2 text-red-500'>Failed !!</h1> 
        <p className='text-center text-base sm:text-[18px]'>Payment could not be completed</p>
        <p className='mx-auto'>Your Payment Status is {paymentStatus}</p>
  </div>
  )
}

export default PaymentFailure;