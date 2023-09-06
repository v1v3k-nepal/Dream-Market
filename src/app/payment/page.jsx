"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import PaymentSuccess from '../paymentSuccess/page';
import PaymentFailure from '../paymentFailure/page';

const Payment = () => {

  const router = useRouter();
  const params = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("")
  const [isLoading, setIsLoading] = useState(true);

  const paymentData = {
    "pidx": params.get("pidx"),
    "amount": params.get("amount"),
    "transaction_id" : params.get("transaction_id"),
    "purchase_order_id": params.get("purchase_order_id"),
    "purchase_order_name": params.get("purchase_order_name"),
    "mobile": params.get("mobile")
  }

useEffect(()=>{

  const verifyPayment = async (pidx)=>{

    const payload = {"pidx": pidx}
    const response = await fetch("/api/verifyPayment", {
      method: "POST",
      body: JSON.stringify(payload)
    })
    const data = await response.json();
    console.log("I am payment Page",data);

    data ? setIsLoading(false) : setIsLoading(true)
    setPaymentStatus(data.status);
  }

  // verifyPayment(params.get("pidx"))
  verifyPayment(paymentData.pidx)

  // const pidx_local = localStorage.getItem("pidx");
  // verifyPayment(pidx_local)

  // console.log(params.get("pidx"))
  // console.log(localStorage.getItem("pidx"))

  // console.log(paymentStatus)

  // if(paymentStatus!== "Completed"){
  //   router.push("/paymentFailure")
  // }else{
  //   router.push("paymentSuccess")
  // }

})

  if(isLoading)
  return (
    <div className='border-2 border-green-600 rounded-2xl mt-14 p-5 overflow-clip'>
      <div className='relative w-[35vw] h-[35vw] sm:w-[22vw] sm:h-[22w] lg:w-[15vw] lg:h-[15vw] mx-auto spinLoading animate-spin'>
        <Image src="/payment-loading.png" alt="loading image" fill={true} className='object-contain'></Image>
      </div>
      <h1 className='text-center font-bold text-xl sm:text-2xl my-5'>Verifying Payment Status</h1>
      <div className='w-full sm:w-[60vw] h-[15px] bg-gray-300 mx-auto my-5 rounded-md'>
        <p className='bg-green-600 h-full progress-bar-fill rounded-md'></p>
      </div>
    </div>
  )

  else return (
    <div>
      {paymentStatus=="Completed" ? <PaymentSuccess paymentData={paymentData}/> : <PaymentFailure paymentStatus={paymentStatus}/>}
    </div>
  )
}

export default Payment;