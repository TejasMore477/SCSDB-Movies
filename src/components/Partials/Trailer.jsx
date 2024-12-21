import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import NotFound from "../NotFound";


function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const catogery = pathname.includes("movie") ? "MovieInfo" : "TvInfo";
  const { videos } = useSelector((state) => state[catogery].Info);

  console.log(pathname.includes("movie"));
  return (
    <div className="w-full h-screen bg-[rgba(0,0,0,0.9)] absolute left-0 top-0 grid place-content-center">
{videos ? (      <ReactPlayer
        height={700}
        width={1300}
        url={`https://www.youtube.com/watch?v=${videos.key}`}
      />):(<NotFound/>)}
      <div
        onClick={() => navigate(-1)}
        className="bg-red-5000 absolute top-[5%] right-[50%] cursor-pointer"
      >
        <i className="text-4xl font-light ri-close-circle-line"></i>
      </div>
    </div>
  )
}

export default Trailer;
