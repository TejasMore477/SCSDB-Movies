import React from 'react';
import { useNavigate } from 'react-router';
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='h-screen grid place-content-center w-full'>
      <h1 className='text-center  text-3xl text-[#6556CD]'>Sorry, <span className='text-white'>Page Not Found !!</span></h1>
      <div
        onClick={() => navigate(-1)}
        className="bg-red-5000 absolute top-[5%] right-[50%] cursor-pointer"
      >
        <i className="text-4xl font-light ri-close-circle-line"></i>
      </div>
    </div>
  )
}

export default NotFound