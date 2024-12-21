import React from 'react'
import loading from '/loading3.gif'

function Loading() {
  return (
    <div className='w-full h-screen grid place-content-center overflow-hidden bg-black'>
      <img className='size-60 object-cover object-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2' src={loading} alt="loading.." />
        <h1 className='text-2xl font-light text-center absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>
    </div>
  )
}

export default Loading