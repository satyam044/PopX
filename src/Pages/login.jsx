import React from 'react'

const login = () => {
    return (
        <div className='login w-[30rem] h-full px-4 py-10 flex flex-col'>
            <h2 className='font-bold text-3xl'>Signin to your<br /> PopX account</h2>
            <p className='font-semilight text-2xl text-[#afb1b4]'>Lorem, ipsum dolor sit amet.<br /> consectetur adipisicing elit.</p>
            <form>
                <div className='relative flex flex-col gap-2 mt-4'>
                    <input id='email' type="email" placeholder='Enter email address' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <label htmlFor='email' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-[0 0 20px 20px black] text-[#6b25fc] font-semibold'>Email Address</label>
                </div>
                <div className='relative flex flex-col gap-2 mt-4'>
                    <input id='password' type="password" placeholder='Enter password' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <label htmlFor='password' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-lg text-shadow-white text-[#6b25fc] font-semibold'>Password</label>
                </div>
                <button type="submit" className='w-full p-2 text-2xl bg-gray-300 cursor-not-allowed text-white rounded-xl mt-4' disabled>Login</button>
            </form>
        </div>
    )
}

export default login