import React from "react";
import { Link } from "react-router";
import noImage from "/NoImage.jpg";

function Cards({ data, title }) {

  return (
    <div className="w-full grid grid-cols-6 gap-5 px-10 py-10">
      {data.map((card, index) => (
        <Link
        to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
          className="w-[13vw] h-[40vh] shrink-0 cursor-pointer relative"
        >
          <img
            className="w-full h-[35vh] object-cover object-center shadow-zinc-950 shadow-lg"
          src={card.poster_path || card.backdrop_path || card.profile_path ? `https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path || card.profile_path}`:noImage}
            alt={ card.title || card.original_title || card.original_name || card.name }
          />
          <h1 className="w-full my-2 text-base leading-none">
            { card.title || card.original_title || card.name || card.original_name }
          </h1>
          {!isNaN(card.vote_average) &&  <div className="absolute top-[60%] right-[-10%] bg-[#6556CD] size-fit px-3 py-4 rounded-full grid place-content-center">
            <h3 className="text-xs font-bold">{(card.vote_average).toFixed(1)}<sup><i className="text-yellow-400 ri-star-s-fill"></i></sup></h3>
          </div>
          }
        </Link>
      ))}
    </div>
  );
}

export default Cards;
