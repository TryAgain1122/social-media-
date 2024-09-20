import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";


const Header = () => {
  return (
    <header className='bg-blue-600  p-4 flex items-center justify-between sticky top-0 z-50 shadow-md'>
      {/* LOGO */}
      <div>
        <div className='text-2xl font-semibold text-white'>Facebook</div>
      </div>


      {/* Search Bar */}
      <div className='flex bg-white rounded-full p-2 w-9 md:w-1/3 items-center'>
        <IoSearch className='text-black' size={20} />
        <input
          type='text'
          placeholder='Search Facebook'
          className='md:flex flex-grow px-4 py-1 rounded-full text-sm focus:outline-none hidden'
        />
      </div>

      {/* USER ICONS */}
      <div className='flex space-x-4 items-center'>
        <RxAvatar className='text-white' size={30} />
        <div className='text-white'>Username</div>
      </div>
    </header>
  )
}

export default Header