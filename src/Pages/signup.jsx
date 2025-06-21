import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/profile');
  };

  return (
    <div className='signup w-[30rem] h-full px-4 py-10 flex flex-col'>
      <h2 className='font-bold text-3xl'>Create your<br /> PopX account</h2>
      <form className='h-full relative' onSubmit={handleSubmit}>
        <div className='relative flex flex-col gap-2 mt-4'>
          <input id='fname' type="text" name='fname' value={formData.fname} required onChange={handleChange} placeholder='Full Name' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <label htmlFor='fname' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-[0 0 20px 20px black] text-[#6b25fc] font-semibold'>Full Name <span className='text-red-400'>*</span></label>
        </div>
        <div className='relative flex flex-col gap-2 mt-4'>
          <input id='phone' type="text" name='phone' value={formData.phone} required onChange={handleChange} placeholder='Phone number' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <label htmlFor='phone' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-lg text-shadow-white text-[#6b25fc] font-semibold'>Phone number <span className='text-red-400'>*</span></label>
        </div>
        <div className='relative flex flex-col gap-2 mt-4'>
          <input id='email' type="email" name='email' value={formData.email} required onChange={handleChange} placeholder='Enter email address' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <label htmlFor='email' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-[0 0 20px 20px black] text-[#6b25fc] font-semibold'>Email Address <span className='text-red-400'>*</span></label>
        </div>
        <div className='relative flex flex-col gap-2 mt-4'>
          <input id='password' type="password" name='password' required value={formData.password} onChange={handleChange} placeholder='Enter password' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <label htmlFor='password' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-lg text-shadow-white text-[#6b25fc] font-semibold'>Password <span className='text-red-400'>*</span></label>
        </div>
        <div className='relative flex flex-col gap-2 mt-4'>
          <input id='company' type="text" name='company' value={formData.company} onChange={handleChange} placeholder='Company name' className='p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          <label htmlFor='company' className='pl-2 pr-10 transition-all cursor-text bg-[#f7f8f9] absolute top-2 left-1 text-shadow-lg text-shadow-white text-[#6b25fc] font-semibold'>Company name</label>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
          <p>Are you an agency? <span className='text-red-400'>*</span></p>
          <div className='flex items-center gap-3'>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              className="w-6 h-6 cursor-pointer"
              onChange={handleChange}
            />
            <label htmlFor="yes" className="text-xl cursor-pointer">Yes</label>
            <input
              type="radio"
              id="no"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              className="w-6 h-6 cursor-pointer"
              onChange={handleChange}
            />
            <label htmlFor="no" className="text-xl cursor-pointer">No</label>
          </div>
        </div>
        <button type="submit" className={`absolute bottom-0 w-full p-2 text-2xl cursor-auto text-white rounded-xl mt-4 ${!formData.fname || !formData.phone || !formData.email || !formData.password || formData.agency === '' ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 cursor-pointer hover:bg-blue-600'}`} disabled={!formData.fname || !formData.phone || !formData.email || !formData.password || formData.agency === ''}>Create Account</button>
      </form>
    </div>
  )
}

export default Signup