"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"
import Cart from "@/components/Cart/page"
import {useSelector} from "react-redux"

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const totalQty = useSelector((state) => state.cart.cartQuantity);
  return (
    <>
    <div>
        <div>
            <nav className='px-5 sm:px-[10%]  py-3 sm:py-5 flex justify-between items-center bg-green-600'>
                <ul className='hidden md:flex gap-5 cursor-pointer'>
                <Link href="/"><li className='font-bold text-xl text-white'>Home</li></Link>
                <li className='font-bold text-xl text-white'>About</li>
                <li className='font-bold text-xl text-white'>Category</li>
                </ul>
                <Link href="/"><h1 className='font-bold text-2xl lg:text-3xl text-white'>Online Store</h1></Link>
                <div className='flex gap-3 sm:gap-5 cursor-pointer'>
                     <Link href="/search"><AiOutlineSearch className="text-[26px] text-white"/></Link>
                    <AiOutlineHeart className="text-2xl text-white"/>
                    <div className='relative'>
                    <AiOutlineShoppingCart className="text-2xl text-white" onClick={()=>setShowCart(true)}/>
                    {totalQty > 0 && <span className='w-[25px] h-[20px] bg-green-800 absolute rounded-xl text-center -top-[10px] left-[10px] text-sm text-white'>{totalQty}</span>}
                    </div>
                </div>
            </nav>
        </div>
    </div>
    {showCart && <Cart setShowCart={setShowCart}/>}
    </>
  )
}

export default Header