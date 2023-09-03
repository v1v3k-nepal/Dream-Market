"use client"
import React from 'react'
import {useSelector} from "react-redux"
import Image from 'next/image'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const Search = () => {
  const productData = useSelector((state) => state.product.productData)
  // const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("I am search page", productData)
  return (
    <div className='mt-5 md:mx-[5%] lg:mx-[10%]'>
      <div className='flex mb-5'>
        <input type="text" placeholder='Search Products' className='p-3 w-[85%] outline-none text-black'/>
        <button className='bg-green-700 p-3 flex-grow'>Search</button>
      </div>
      {productData.map((item)=>(
              <div key={item.id} className='mb-5 flex items-center'>
              <div className='relative w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] bg-white rounded-md'>
                <Image src={item.image} alt="Product Image" fill={true} className='object-contain p-2'></Image>
              </div>
              <div className='max-w-[75%] sm:max-w-[70%] md:max-w-[82%] lg:max-w-[85%] ml-auto lg:ml-6'>
                <h1 className='whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base font-bold'>{item.title}</h1>
                <p className='whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base'>{item.description}</p>
                <div className="flex gap-1">
                {item.rating.rate >= 1 ? <AiFillStar size={16}/> : <AiOutlineStar size={16}/>}
                {item.rating.rate >= 2 ? <AiFillStar size={16}/> : <AiOutlineStar size={16}/>}
                {item.rating.rate >= 3 ? <AiFillStar size={16}/> : <AiOutlineStar size={16}/>}
                {item.rating.rate >= 4 ? <AiFillStar size={16}/> : <AiOutlineStar size={16}/>}
                {item.rating.rate >= 5 ? <AiFillStar size={16}/> : <AiOutlineStar size={16}/>}
              </div>
              <p className='text-sm sm:text-base'><span>&#36; </span>{item.price}</p>
              </div>
            </div>
      ))}
    </div>
  )
}

export default Search;