import React from "react";

function HorizontalCards({ data }) {
  return (
    <div className="w-full flex items-center justify-between flex-nowrap gap-5 p-5 overflow-x-auto mb-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-40 h-[40vh] bg-zinc-900 shrink-0 cursor-pointer"
        >
          <img
            className="h-[25vh] w-full bg-violet-6000 object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${
              item.poster_path || item.backdrop_path
            }`}
            alt=""
          />
          <div className="px-3 pt-3">
            <h1 className="w-full my-2 text-base leading-none">
              {item.title ||
                item.original_title ||
                item.original_name ||
                item.name}
            </h1>
            <p className="text-xs mb-4 font-thin">
              {item.overview.slice(0, 50)}
              <span className="text-[#6556CD]">...more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HorizontalCards;
