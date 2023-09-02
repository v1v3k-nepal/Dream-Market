import React from 'react'
import Link from 'next/link'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
    <div>
        <div>
            <nav className='px-[10%]  py-2 sm:py-5 flex justify-between items-center bg-green-600'>
                <ul className='hidden md:flex gap-5 cursor-pointer'>
                <Link href="/"><li className='font-bold text-xl'>Home</li></Link>
                <li className='font-bold text-xl'>About</li>
                <li className='font-bold text-xl'>Category</li>
                </ul>
                <Link href="/"><h1 className='font-bold text-2xl lg:text-3xl'>Online Store</h1></Link>
                <div className='flex gap-2 sm:gap-5 cursor-pointer'>
                     <Link href="/search"><AiOutlineSearch className="text-[26px]"/></Link>
                    <AiOutlineHeart className="text-2xl"/>
                    <AiOutlineShoppingCart className="text-2xl"/>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header