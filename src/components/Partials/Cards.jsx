import React from "react";
import { Link } from "react-router";
import noImage from "/NoImage.jpg";

function Cards({ data, title }) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
          className="w-full h-full cursor-pointer relative group"
        >
          <div className="relative pb-[150%] overflow-hidden rounded-lg shadow-md shadow-zinc-950">
            <img
              className="absolute w-full h-full object-cover object-center group-hover:opacity-80 transition-opacity"
              src={
                card.poster_path || card.backdrop_path || card.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      card.poster_path || card.backdrop_path || card.profile_path
                    }`
                  : noImage
              }
              alt={
                card.title ||
                card.original_title ||
                card.original_name ||
                card.name
              }
              loading="lazy"
            />
          </div>
          
          <h1 className="w-full mt-2 text-sm sm:text-base leading-tight line-clamp-2">
            {card.title ||
              card.original_title ||
              card.name ||
              card.original_name}
          </h1>
          
          {!isNaN(card.vote_average) && (
            <div className="absolute top-[55%] right-[-5%] sm:right-[-8%] bg-[#6556CD] size-fit px-2 py-3 sm:px-3 sm:py-4 rounded-full grid place-content-center">
              <h3 className="text-xs font-bold">
                {card.vote_average.toFixed(1)}
                <sup>
                  <i className="text-yellow-400 ri-star-s-fill"></i>
                </sup>
              </h3>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;