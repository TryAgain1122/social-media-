import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='bg-white p-4 w-1/4 hidden md:block'>
        <ul className='space-y-4'>
            <li className='flex items-center space-x-4'>
                <IoHomeOutline className='text-blue-600 shadow' size={30}/>
                <a href="#" className='font-medium text-stone-800'>Home</a>
            </li>

            <li className='flex items-center space-x-4'>
                <LiaUserFriendsSolid className='text-blue-600 shadow' size={30}/>
                <a href="#" className='font-medium text-stone-800'>Friends</a>
            </li>

            <li className='flex items-center space-x-4'>
                <MdOutlineShoppingCart className='text-blue-600 shadow' size={30}/>
                <a href="#" className='font-medium text-stone-800'>Market Place</a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar