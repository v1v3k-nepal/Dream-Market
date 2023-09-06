"use client"
import React from 'react'
import { useSelector } from "react-redux";

const PaymentSuccess = () => {
  const paymentData = useSelector((state) => state.payment.paymentData);
  console.log(paymentData)
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess;