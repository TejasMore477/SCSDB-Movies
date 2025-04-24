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
        <div className="w-full sm:h-[70vh] h-[75vh] p-4 relative">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-full flex flex-col justify-end items-start sm:p-10  rounded-md  overflow-hidden"
          >
            <div className="sm:hidden bg-black bg-opacity-30 backdrop-blur-[2px] px-4 py-8 rounded-t-md">
              <Link
                to={`${data.media_type}/details/${data.id}`}
                className="inline-block w-full text-3xl leading-none tracking-tight font-medium mb-2"
              >
                {data.name || data.original_title || data.title}
              </Link>

              <Link className="my-2 w-full text-sm inline-block">
                {data.overview.slice(0, 100)}
                <span className="text-[#6556CD]">...more</span>
              </Link>

              <div className="flex items-center justify-center w-fit gap-2 font-medium pb-4">
                <p className="capitalize mr-5">{data.media_type}</p>
                <h2 className="mr-10">{formattedDate || "No Info"}</h2>
                <i className=" text-yellow-300 text-sm ri-star-fill"></i>
                <p className="text-white ">{data.vote_average}</p>
              </div>

              <WatchTrailer
                pathname={`${pathname}${data.media_type}/details/${data.id}`}
              />
            </div>

            <Link
              to={`${data.media_type}/details/${data.id}`}
              className="w-[80%] text-5xl leading-none tracking-tight font-semibold mb-2 sm:block hidden"
            >
              {data.name || data.original_title || data.title}
            </Link>

            <p className="my-2 md:w-[70%] w-full text-sm sm:block hidden">
              {data.overview}
            </p>

            <div className="sm:flex items-center justify-center w-fit gap-2 text-lg font-medium pb-4 hidden">
              <p className="capitalize mr-5">{data.media_type}</p>
              <h2 className="mr-10">{formattedDate || "No Info"}</h2>
              <i className=" text-yellow-300 text-sm ri-star-fill"></i>
              <p className="text-white ">{data.vote_average}</p>
            </div>

            <div className="w-full h-fit sm:block hidden">
              <WatchTrailer
                pathname={`${pathname}${data.media_type}/details/${data.id}`}
              />
            </div>

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
