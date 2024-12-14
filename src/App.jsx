import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] text-white flex py-8'>
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App