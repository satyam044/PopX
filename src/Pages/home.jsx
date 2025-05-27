import React from 'react'

const home = () => {
  return (
    <div className='w-[30rem] h-full px-4 py-10 flex flex-col justify-end'>
        <div>
            <h2 className='font-bold text-3xl'>Welcome to PopX</h2>
            <p className='text-2xl text-[#afb1b4]'>Lorem, ipsum dolor sit amet.<br/> consectetur adipisicing elit.</p>
            <div className='w-full flex flex-col items-center gap-2 mt-4'>
                <button className='w-full p-2 text-2xl bg-[#6b25fc] cursor-pointer text-white rounded-xl'>Create Account</button>
                <button className='w-full p-2 text-2xl bg-[#cbb7f7] cursor-pointer rounded-xl'>Already Registered? LogIn</button>
            </div>
        </div>
    </div>
  )
}

export default home