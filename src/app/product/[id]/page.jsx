"use client"
import React, {useState} from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest} from "react-icons/fa";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculateCartSubtotal} from "@/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RelatedProducts from "@/components/Products/RelatedProducts/page"


const SingleProductPage = ({ params }) => {
  
  // const cartItems = useSelector((state) => state.cart.cartItems)
  // const quantity = useSelector((state) => state.quantity);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = params;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  // console.log(data);

  const handleAddToCart = (productData, quantity)=>{
    dispatch(addToCart({...productData, quantity}));
    dispatch(calculateCartSubtotal());
    toast.success("Product Added to Cart")
    // console.log(cartItems);
  }

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };


  return (
    <>
    <div className="flex  flex-col lg:flex-row mt-[5%] mb-5 gap-10">
      <div className="left bg-white md:basis-[30%] p-8 rounded-md h-fit">
        <div className="relative w-[45vw] h-[45vw] sm:w-[32vw] sm:h-[33vw] mx-auto">
          <Image src={data? data.image: "/loading-img.jpg"} alt="Product Image" fill={true} className="object-contain"></Image>
        </div>
      </div>
      <div className="right">
        <div>
          <h1 className="font-bold text-2xl mb-5">{data?.title}</h1>
          <p className="font-bold text-xl mb-5">
            <span>&#36; </span>
            {data?.price}
          </p>
          <p className="mb-5">{data?.description}</p>
          <div className="flex gap-5">
            <div className="text-xl sm:text-3xl flex gap-5 border-2 border-green-500 items-center px-2 sm:px-3 cursor-pointer">
              <button onClick={decrement} className="text-center text-3xl">-</button>
              <div className="border-x-2 border-green-500 w-10 sm:w-14 p-1 text-center">{quantity}</div>
              <button onClick={increment} className="text-center text-3xl">+</button>
            </div>
            <button className="bg-green-700 px-3 sm:px-5  py-2 sm:py-3 text-white text-base sm:text-xl font-bold outline-none"
            onClick={()=>handleAddToCart(data, quantity)}>ADD TO CART</button>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex gap-1">
              <span className="font-bold">Rating: </span> 
              <div className="flex gap-1">
                {data?.rating.rate >= 1 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data?.rating.rate >= 2 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data?.rating.rate >= 3 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data?.rating.rate >= 4 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data?.rating.rate >= 5 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data?.rating.rate}
              </div>
            </div>
            <p>
              <span className="font-bold">Rated By: </span> {data?.rating.count} <span>People</span>
            </p>

            <p>
              <span className="font-bold">Category:</span> {data?.category}
            </p>
            <div className="flex gap-2">
              <span className="font-bold">Share:</span>
              <span className="flex gap-4 cursor-pointer">
                <FaFacebookF size={18} />
                <FaInstagram size={18} />
                <FaLinkedinIn size={18} />
                <FaTwitter size={18} />
                <FaPinterest size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
        {/* {data? (<div className='my-8' key={data.id}>
      <h1 className="font-bold text-2xl">Related Products</h1>
      <RelatedProducts/>
    </div>): ' '} */}
    </>
  );
};

export default SingleProductPage;
