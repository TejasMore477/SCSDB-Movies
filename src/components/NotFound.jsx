import React from "react";
import { useNavigate } from "react-router";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen grid place-content-center w-full gap-10 relative">
      <div
        onClick={() => navigate(-1)}
        className="cursor-pointer text-center absolute top-10 right-1/2 translate-x--1/2 translate-y--1/2"
      >
        <i className="text-4xl font-light ri-close-circle-line"></i>
      </div>
<div>
<h1 className="text-center font-bold text-6xl lg:text-8xl text-[#6556CD]">
        404 <span className="text-white text-4xl font-normal">Occured</span>
      </h1>
      <h2 className="text-center  text-3xl lg:text-5xl text-white">
        Page <span className=" text-[#6556CD] font-bold">Not Found !!</span>
      </h2>
</div>
    </div>
  );
}

export default NotFound;
