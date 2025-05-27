import React from 'react'
import Avatar from '../../public/Assets/avatar.webp'
import { FaCamera } from "react-icons/fa";

const profile = () => {
  return (
    <div className='w-[30rem] h-full flex flex-col'>
      <h2 className='w-full px-4 py-4 bg-white text-xl'>Account Settings</h2>
      <div className='h-full flex flex-col justify-between items-center'>
        <div className='p-4 border-b-2 border-[#afb1b4] border-dashed'>
          <div className='relative mb-6 flex gap-4'>
            <input type="file" className='hidden' id='avatar' />
            <label htmlFor='avatar' className='relative cursor-pointer'>
              <img className='w-20 h-20' src={Avatar} alt="" />
              <FaCamera className='w-6 h-6 p-1 absolute right-0 bottom-2 rounded-full bg-[#6b25fc] text-white' />
            </label>
            <div>
              <h3 className='font-semibold'>Username</h3>
              <p className='font-light'>EMAIL.COM</p>
            </div>
          </div>
          <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas totam ullam aliquid aperiam quasi dolore quae repellendus magnam sapiente repellat quaerat magni qui.</p>
        </div>
        <div className='w-full h-10 border-t-2 border-[#afb1b4] border-dashed'></div>
      </div>
    </div>
  )
}

export default profile