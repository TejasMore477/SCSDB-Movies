import React, { useEffect, useState } from "react";
import SideNav from "./Partials/SideNav";
import TopNav from "./Partials/TopNav";
import Header from "./Partials/Header";
import axios from "../utils/Axios";
import Loading from "./Loading";
import HorizontalCards from "./Partials/HorizontalCards";
import DropDown from "./Partials/DropDown";

function Home() {
  document.title = "SCSDB | Homepage";
  const [wallPaper, setWallpaper] = useState([]);
  const [trending, setTrending] = useState([]);
  const [TrendValue, setTrendValue] = useState("all");

  const getWallPaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomWallPaper =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomWallPaper);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${TrendValue}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    wallPaper.length === 0 && getWallPaper();
    getTrending();
  }, [TrendValue]);

  return wallPaper && trending.length > 0 ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-hidden pt-5">
        <TopNav />
        <Header data={wallPaper} />
        
        <div className="w-full px-4 flex items-center justify-between">
          <h1 className="text-zinc-400 font-semibold text-2xl">Trending</h1>
          <DropDown
            handleChange={(e) => setTrendValue(e.target.value)}
            title={"Filter"}
            options={["all", "tv", "movie"]}
            icon={<i className="ri-filter-fill"></i>}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
