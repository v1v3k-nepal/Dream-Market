"use client";
import React from "react";
import { useFormik } from "formik";
import { shippingDataSchema } from "@/schemas/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const initialValues = {
  fullname: "",
  mobile: "",
  email: "",
  province: "",
  city: "",
  area: "",
  address: "",
  landmark: "",
};

const Shipping = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const total = parseFloat(cartSubtotal) + parseFloat(shippingCost);
  const totalPayment = parseInt(total.toFixed(2));

  const { 
    values, errors, isValid, touched, handleSubmit, submitForm, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: shippingDataSchema,
    onSubmit: (values, action) => {
      console.log(values)
      handlePayment(values)
      // action.resetForm();
    },
  });

  const handlePayment = async (shippingData) => {

    const payload = {
        "return_url": "https://your-dream-market.vercel.app/payment",
        "website_url": "https://your-dream-market.vercel.app",
        "amount": totalPayment * 100, // Convert to paisa (assuming cartSubTotal is in rupees)
        "purchase_order_id": shippingData.mobile,
        "purchase_order_name": shippingData.fullname,
        "customer_info" : {
          "name": shippingData.fullname,
          "email": shippingData.email,
          "phone": shippingData.mobile,
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
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (data.payment_url !== undefined) {
      window.location.href = data.payment_url;
    } else if(cartItems.length == 0){
        toast.error("Your Cart is Empty");
    }else{
        toast.error("Amount must be between Rs 10 to 1000 during Test");
        console.log(data);
    }

    localStorage.setItem("pidx", data.pidx);
    // console.log(localStorage.getItem("pidx"))
    // console.log("Client Page",data.payment_url)
  };

  return (
    <div className="flex flex-col items-center justify-center border-green-600 border-2 
    rounded-2xl my-5 p-5 w-fit mx-auto">
        <ToastContainer/>
      <h1 className="font-bold text-2xl lg:text-3xl text-center mb-5">
        Shipping Details
      </h1>
      <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="input-box">
            <label htmlFor="fullname">
              Full Name <span>*</span>
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Full Name"
              className="w-[80vw] lg:w-[30vw]"
              // required
            />
            {errors.fullname && touched.fullname ? (
              <p className="form-errors">{errors.fullname}</p>
            ) : null}
          </div>

          <div className="input-box">
            <label htmlFor="mobile">
              Mobile Number <span>*</span>
            </label>
            <input
              id="mobile"
              type="phone"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mobile Number"
              // required
            />
            {errors.mobile && touched.mobile ? (
              <p className="form-errors">{errors.mobile}</p>
            ) : null}
          </div>

          <div className="input-box">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email Address"
              // required
            />
            {errors.email && touched.email ? (
              <p className="form-errors">{errors.email}</p>
            ) : null}
          </div>

          <div className="select-box">
            <label htmlFor="province">
              Province <span>*</span>
            </label>
            <select
              name="province"
              value={values.province}
              onChange={handleChange}
              onBlur={handleBlur}
              className="rounded-md py-[12px] px-2 text-gray-400 bg-white"
              id="province"
            >
              <option hidden className="p-5">
                Province
              </option>
              <option value="koshi">Koshi</option>
              <option value="madesh">Madesh</option>
              <option value="bagmati">Bagmati</option>
              <option value="gandaki">Gandaki</option>
              <option value="lumbini">Lumbini</option>
              <option value="karnali">Karnali</option>
              <option value="sudurpaschim">Sudur Paschim</option>
            </select>
            {errors.province && touched.province ? (
              <p className="form-errors">{errors.province}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="input-box">
            <label htmlFor="city">
              Your City <span>*</span>
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="City Name"
              className="w-[80vw] lg:w-[30vw]"
              // required
            />
            {errors.city && touched.city ? (
              <p className="form-errors">{errors.city}</p>
            ) : null}
          </div>

          <div className="input-box">
            <label htmlFor="area">
              Area <span>*</span>
            </label>
            <input
              id="area"
              type="text"
              name="area"
              value={values.area}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Area"
              // required
            />
            {errors.area && touched.area ? (
              <p className="form-errors">{errors.area}</p>
            ) : null}
          </div>

          <div className="input-box">
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Street Name/ House Number"
              // required
            />
            {errors.address && touched.address ? (
              <p className="form-errors">{errors.address}</p>
            ) : null}
          </div>

          <div className="input-box">
            <label htmlFor="landmark">
              Landmark <span className="optional">(optional)</span>
            </label>
            <input
              id="landmark"
              type="text"
              name="landmark"
              value={values.landmark}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E.g. Besides Bus Station"
            />
            {errors.landmark && touched.landmark ? (
              <p className="form-errors">{errors.landmark}</p>
            ) : null}
          </div>
        </div>
        </div>
        <button type="submit" className="bg-green-600 font-bold text-xl mt-6 p-3 rounded-md w-full"
        onClick={()=>{if(!isValid) toast.error("Please Enter Valid Shipping Data")}}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Shipping;
