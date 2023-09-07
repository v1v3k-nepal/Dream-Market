"use client"
import React from "react";
import { useFormik } from "formik";
import { shippingDataSchema } from "@/schemas/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Shipping = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);

  const payload = {
    return_url: "https://your-dream-market.vercel.app/payment",
    website_url: "https://your-dream-market.vercel.app",
    amount: (cartSubtotal + shippingCost) * 100, // Convert to paisa (assuming cartSubTotal is in rupees)
    purchase_order_id: "test_OrderId",
    purchase_order_name: "Product Name",
    // customer_info: customerInfo,
    customer_info: {
      name: "Vivek Nepal",
      email: "example@gmail.com",
      phone: "9811496763",
    },

    product_details: cartItems.map((item) => ({
      identity: item.id,
      name: item.title,
      total_price: item.quantity * item.price * 100,
      quantity: item.quantity,
      unit_price: item.price * 100,
    })),
  };

  const handlePayment = async (payload) => {
    const response = await fetch("/api/initiatePayment", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (data.payment_url !== undefined) {
      window.location.href = data.payment_url;
    } else {
      toast.error("Amount must be between Rs 10 to 1000 during Test");
      // console.log(data);
    }

    localStorage.setItem("pidx", data.pidx);
    // console.log(localStorage.getItem("pidx"))
    // console.log("Client Page",data.payment_url)
  };

  return(
    <div>
        Shipping
    </div>
  );
};

export default Shipping;
