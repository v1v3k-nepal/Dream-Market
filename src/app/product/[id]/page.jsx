import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const getData = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch Data");
  }
  return data;
};

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  // console.log(data);
  return (
    <div className="flex  flex-col lg:flex-row mx-[10%] mt-[5%] mb-5 gap-10">
      <div className="left bg-white md:basis-[30%] p-8 rounded-md h-fit">
        <div className="relative w-[45vw] h-[45vw] sm:w-[35vw] sm:h-[35vw] mx-auto">
          <Image src={data.image} alt="Product Image" fill={true} className="object-contain"></Image>
        </div>
      </div>
      <div className="right">
        <div>
          <h1 className="font-bold text-2xl mb-5">{data.title}</h1>
          <p className="font-bold text-xl mb-5">
            <span>&#36; </span>
            {data.price}
          </p>
          <p className="mb-5">{data.description}</p>
          <div className="flex gap-5">
            <div className="text-xl sm:text-3xl flex gap-5 border-2 border-green-500 items-center px-2 sm:px-3 cursor-pointer">
              <span>-</span>
              <span className="border-x-2 border-green-500 px-3 sm:px-4">{1}</span>
              <span>+</span>
            </div>
            <button className="bg-green-700 px-3 sm:px-5  py-2 sm:py-3 text-white text-base sm:text-xl font-bold outline-none">ADD TO CART</button>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex gap-1">
              <span className="font-bold">Rating: </span> 
              <div className="flex gap-1">
                {data.rating.rate >= 1 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data.rating.rate >= 2 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data.rating.rate >= 3 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data.rating.rate >= 4 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data.rating.rate >= 5 ? <AiFillStar size={22}/> : <AiOutlineStar size={22}/>}
                {data.rating.rate}
              </div>
            </div>
            <p>
              <span className="font-bold">Rated By: </span> {data.rating.count} <span>People</span>
            </p>

            <p>
              <span className="font-bold">Category:</span> {data.category}
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
    </div>
  );
};

export default SingleProductPage;
