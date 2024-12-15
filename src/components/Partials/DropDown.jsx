import React from "react";

function DropDown({ TrendValue, handleChange }) {
  return (
    <div className="w-full bg-red-9000 px-4 flex items-center justify-between">
      <h1 className="text-zinc-400 font-semibold text-2xl">Trending</h1>
      <div className="hover:bg-zinc-700  px-4 py-1 rounded-sm">
        <select
          value={TrendValue}
          onChange={handleChange}
          className="custom-select text-zinc-200 bg-transparent w-44 border-none appearance-auto outline-none"
        >
          <option
            className="custom-option bg-zinc-800 border-none outline-none"
            value="all"
          >
            All{" "}
          </option>
          <option
            className="custom-option bg-zinc-800 border-none outline-none"
            value="movie"
          >
            Movies
          </option>
          <option
            className="custom-option bg-zinc-800 border-none outline-none"
            value="tv"
          >
            Tv Shows
          </option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
