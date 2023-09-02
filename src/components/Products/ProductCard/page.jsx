import React from 'react'
import Image from 'next/image'
// import { useSelector } from "react-redux";

const ProductCard = ({prodData}) => {
  // const productData = useSelector((state) => state.product.productData);
  // console.log(prodData)
  return (
    <div className='max-w-[300px] h-fit bg-white cursor-pointer rounded-md'>
        <div className=' flex items-center p-2 sm:p-5'>
            <div className="relative w-[40vw] h-[30vw] sm:w-[20vw] sm:h-[18vw] mx-auto">
                <Image src={prodData.image} alt="Product Image" fill={true} className='object-contain'></Image>
            </div>
        </div>
        <div className='p-1 sm:p-3 bg-green-600 max-w-[300px] rounded-b-md'>
        <h1 className='font-bold text-base sm:text-lg overflow-hidden whitespace-nowrap text-ellipsis'>{prodData.title}</h1>
        <p><span>&#36; </span>{prodData.price}</p>
        </div>
    </div>
  )
}

export default ProductCard