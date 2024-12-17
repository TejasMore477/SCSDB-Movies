import React from "react";
import { Link } from "react-router";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-500 p-5">
      <h1 className="text-xl font-semibold">
        <i className="text-[#6556CD] ri-tv-fill"></i>
        <span className="ml-3">SCSDB-Movies</span>
      </h1>

      <nav className="text-lg text-zinc-400 flex flex-col gap-2">
        <h1 className="font-medium mb-2 mt-10 text-white">New Feed</h1>
        
        <Link to={"/trendings"} className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>

        <Link to={"/populars"} className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>

        <Link to={"/movies"} className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>

        <Link className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className=" mr-2 ri-tv-2-fill"></i>
          Tv-Shows
        </Link>

        <Link className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-user-star-line"></i>
          People
        </Link>
      </nav>

      <hr className=" border-none h-[1px] bg-zinc-500 my-2" />

      <nav className="text-lg text-zinc-400 flex flex-col gap-3">
        <h1 className="font-medium mb-2 text-white">More Info</h1>

        <Link className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-information-fill"></i>
          About SCSDB
        </Link>

        <Link className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>

    </div>
  );
}

export default SideNav;
