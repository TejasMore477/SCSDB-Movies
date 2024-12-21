import React from "react";
import { Link, useLocation } from "react-router";
import WatchTrailer from "./WatchTrailer";

function Header({ data }) {
  const firstAirDate = data?.first_air_date || data?.release_date || ""; // optional chaining and fallback value
  const { pathname } = useLocation();

  let formattedDate = "";
  
  if (firstAirDate) {
    const [year, month, day] = firstAirDate.split("-").map(Number);
    //.map(number) is used to retun a new array with number value in side, as we get an array of string after spliting on bases of "-"

    const currentTime = new Date(year, month - 1, day); //string to Date object
    //month in js is 0th based so i used month-1

    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    formattedDate = currentTime.toLocaleDateString("en-US", dateOptions);
  }

  return (
    <>
      {data ? (
        <div className="w-full h-[70vh] p-4 relative">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-full flex flex-col justify-end items-start p-10"
          >
            <Link
              to={`${data.media_type}/details/${data.id}`}
              className="w-[80%] text-5xl font-semibold mb-2"
            >
              {data.name || data.original_title || data.title}
            </Link>

            <p className="my-2 w-[70%] text-sm">{data.overview}</p>

            <div className="flex items-center justify-center w-fit gap-2">
              <p className="capitalize text-lg mr-5">{data.media_type}</p>
              <h2 className="text-lg mr-10">{formattedDate || "No Info"}</h2>
              <i className=" text-yellow-300 text-sm ri-star-fill"></i>
              <p className="text-white text-lg">{data.vote_average}</p>
            </div>

            <WatchTrailer pathname={`${pathname}${data.media_type}/details/${data.id}`} />
          </div>
        </div>
      ) : (
        <h1 className="w-full text-center mt-[10vh] text-xl font-thin">
          Loading....
        </h1>
      )}
    </>
  );
}

export default Header;
