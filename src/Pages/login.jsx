import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const formData = localStorage.getItem('userData');
    const userData = JSON.parse(formData);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData) {
            if (userData.email === e.target.email.value && userData.password === e.target.password.value) {
                navigate('/profile');
            } else {
                alert("Invalid email or password");
            }
        }
    }
    return (
        <div className='login w-[30rem] h-full px-4 py-10 flex flex-col'>
            <h2 className='font-bold text-3xl'>Signin to your<br /> PopX account</h2>
            <p className='font-semilight text-2xl text-[#afb1b4]'>Lorem, ipsum dolor sit amet.<br /> consectetur adipisicing elit.</p>
            <form onSubmit={handleSubmit}>
                <div className='relative flex flex-col gap-2 mt-4'>
                    <input id='email' type="email" name='email' placeholder='Enter email address' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <label htmlFor='email' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-[0 0 20px 20px black] text-[#6b25fc] font-semibold'>Email Address</label>
                </div>
                <div className='relative flex flex-col gap-2 mt-4'>
                    <input id='password' type="password" name='password' placeholder='Enter password' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <label htmlFor='password' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-lg text-shadow-white text-[#6b25fc] font-semibold'>Password</label>
                </div>
                <button type="submit" className={`w-full p-2 text-2xl bg-gray-300 text-white rounded-xl mt-4 ${!userData.email || !userData.password === "" ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer hover:bg-blue-600'}`} disabled={!userData.email || !userData.password === ""}>Login</button>
            </form>
        </div>
    )
}

export default Login