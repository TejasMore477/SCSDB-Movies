import React from "react";
import { Link } from "react-router";

function SideNav({ sideNav, setSideNav }) {
  return (
    <div className={`xl:w-full lg:w-[30%] md:w-[35%] sm:w-[45%] w-[80%] ${sideNav && ('bg-[#1F1E24] border-l-2')} h-full xl:border-r-2 border-zinc-500 p-5`}>
      <div
        onClick={(e) => { e.stopPropagation();
           return setSideNav((prev) => !prev)}}
        className="text-2xl xl:hidden hover:cursor-pointer flex items-center justify-end pt-2"
      >
        <i className="ri-menu-3-fill"></i>
      </div>

      <h1 className="text-xl font-semibold hidden xl:block">
        <i className="text-[#6556CD] ri-tv-fill"></i>
        <span className="ml-3">SCSDB-Movies</span>
      </h1>

      <nav className="text-lg text-zinc-400 flex flex-col gap-2">
        <h1 className="font-medium mb-2 mt-10 text-white">New Feed</h1>

        <Link
          to={"/trendings"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>

        <Link
          to={"/populars"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>

        <Link
          to={"/movies"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>

        <Link
          to={"/tvshows"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className=" mr-2 ri-tv-2-fill"></i>
          Tv-Shows
        </Link>

        <Link
          to={"/peoples"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-user-star-line"></i>
          People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-500 my-2" />

      <nav className="text-lg text-zinc-400 flex flex-col gap-3">
        <h1 className="font-medium mb-2 text-white">More Info</h1>

        <Link
          to={"/about"}
          className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-2 ri-information-fill"></i>
          About SCSDB
        </Link>

        <Link to={"/contact"} className="active:bg-[#4c39ca] hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
