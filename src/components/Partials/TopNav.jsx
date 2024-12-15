import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import noimage from "/NoImage.jpg"

function TopNav() {
  const [ query, setQuery ] = useState("");
  const [ searches, setSerches ] = useState([]);
  const [ adults, setAdults ] = useState(true);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(
        `/search/multi?query=${query}&include_adult=${adults}&language=en-US&page=1`
      );
      setSerches(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full flex items-center justify-center relative bg-red-9000 mb-3">
      <i className="text-zinc-400 text-3xl ri-search-eye-line"></i>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="hover:bg-zinc-700 rounded-full w-[50%] text-zinc-200 py-2 px-5 border-none bg-transparent outline-none mx-2 text-lg"
        placeholder="Search Anything"
      />

      <i
        onClick={() => setQuery("")}
        className={`${
          query.length !== 0 ? "opacity-1" : "opacity-0"
        } cursor-pointer text-zinc-400 text-3xl ri-close-fill`}
      ></i>

      <div className="max-h-[40vh] w-[50%] bg-zinc-300 bg-opacity-10 backdrop-blur-[3px] absolute top-[100%] rounded-xl overflow-auto z-10">
        {searches.map((search, index) => {
          return (
            <Link
              key={index}
              className=" bg-transparent hover:bg-zinc-700/40 hover:backdrop-blur-[5px]  text-zinc-300 hover:text-zinc-50 rounded-lg flex items-center justify-between w-[100%] py-2 px-5"
            >
              <span>
                {search.title ||
                  search.name ||
                  search.original_name ||
                  search.original_title}
              </span>
              <img
                className="size-[10vh] object-cover object-center"
                src={search.poster_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.poster_path || search.profile_path}`:`${noimage}`}
                alt="!"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopNav;
