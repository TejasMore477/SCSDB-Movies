import React from "react";
import { Link } from "react-router";

function Cards({ data }) {
  return (
    <div className="w-full grid grid-cols-6 gap-5 px-10 py-10">
      {data.map((card,index)=>(
      <Link key={index} className="w-[13vw] h-[40vh] shrink-0 cursor-pointer ">
        <img
        className="w-full h-[35vh] object-cover object-center shadow-zinc-950 shadow-lg"
          src={`https://image.tmdb.org/t/p/original/${card.poster_path || card.backdrop_path}`}
          alt={card.title || card.original_title || card.original_name || card.name}
        />
                  <h1 className="w-full my-2 text-base leading-none">
            {card.title ||
              card.original_title ||
              card.original_name ||
              card.name}
          </h1>
      </Link>

      ))}
    </div>
  );
}

export default Cards;
