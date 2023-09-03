import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='px-5 sm:px-[10%] sm:py-2 bg-green-600 items-center justify-center flex flex-col md:flex-row mt-auto'>
        <p className='text-sm sm:text-sm pt-3 sm:pt-0 text-white'>OnlineStore 2023 Coded With ❤️️ Vivek Nepal</p>
        <div className='relative h-[50px] w-[300px] md:ml-auto'>
            <Image src="/payment-logo.png" alt="Payment icon" fill={true} className='object-contain'></Image>
        </div>
    </div>
  )
}

export default Footer