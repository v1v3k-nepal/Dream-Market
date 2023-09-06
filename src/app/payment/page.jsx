"use client"
import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const Payment = () => {

  const router = useRouter();
  const params = useSearchParams();

useEffect(()=>{
  const verifyPayment = async (pidx)=>{
    const payload = {"pidx": pidx}
    const response = await fetch("/api/verifyPayment", {
      method: "POST",
      body: JSON.stringify(payload)
    })
    const data = await response.json();
    console.log("I am payment Page",data)
  }
  const pidx_local = localStorage.getItem("pidx");
  // verifyPayment(pidx_local)

  verifyPayment(params.get("pidx"))
  // console.log(params.get("pidx"))
  // console.log(localStorage.getItem("pidx"))
  router.push("/payment")
})
  return (
    <div>Verifying Payment</div>
  )
}

export default Payment;