import React from 'react'
import { Link } from 'react-router'

function WatchTrailer({pathname}) {
    console.log(pathname,"form each trailer")
  return (
    <Link to={`${pathname}/trailer`}  className="px-4 py-2 mb-2 rounded-md bg-[#6556CD] mt-5 hover:bg-[#4b3abc] active:bg-[#4f3bd0]">WatchTrailer</Link>
  )
}

export default WatchTrailer