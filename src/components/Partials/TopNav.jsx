import React, { useState } from "react";
import { Link } from "react-router";

function TopNav() {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="w-full h-[10vh] flex items-center justify-center relative">

<i className="text-zinc-400 text-3xl ri-search-eye-line"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="hover:bg-zinc-700 rounded-full w-[50%] text-zinc-200 py-3 px-5 border-none bg-transparent outline-none mx-2 text-lg"
        placeholder="Search Anything"
      />
       <i onClick={()=>setQuery("")} className={`${query.length !== 0 ? "opacity-1":"opacity-0"} cursor-pointer text-zinc-400 text-3xl ri-close-fill`}></i>

      <div className="max-h-[40vh] w-[50%] bg-zinc-700 bg-opacity-40 absolute top-[100%] rounded-xl overflow-auto">
        {/* <Link className="hover:bg-zinc-700 text-zinc-400 hover:text-zinc-50 rounded-lg flex items-center justify-between w-[100%] py-2 px-5">
          <span>someting</span>
          <img src="" alt="" />
        </Link>
        <Link className="hover:bg-zinc-700 text-zinc-400 hover:text-zinc-50 rounded-lg flex items-center justify-between w-[100%] py-2 px-5">
          <span>someting</span>
          <img src="" alt="" />
        </Link> */}
      </div>
    </div>
  );
}

export default TopNav;
