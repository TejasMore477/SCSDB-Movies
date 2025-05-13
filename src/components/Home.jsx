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
  const [sideNav, setSideNav] = useState(false);

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
      <div className="w-[20%] xl:block hidden ">
        <SideNav />
      </div>

      <div className="xl:w-[80%] w-full h-full overflow-hidden pt-5 relative">
        <div className="xl:px-[20%] px-5 md:flex items-center  justify-between">
          <div className="flex items-center justify-between ">
            <h1 className="text-xl font-semibold pb-4 md:pd-0 xl:hidden">
              <i className="text-[#6556CD] ri-tv-fill"></i>
              <span className="ml-3">SCSDB-Movies</span>
            </h1>
            <div
              onClick={() => setSideNav((prev) => !prev)}
              className="text-2xl hover:cursor-pointer block md:hidden"
            >
              <i className="ri-menu-3-fill"></i>
            </div>
          </div>

          <div className="xl:w-full md:w-[60%] w-full">
            <TopNav justify="between" />
          </div>

          <div
            onClick={() => setSideNav((prev) => !prev)}
            className="text-2xl xl:hidden hover:cursor-pointer hidden md:block"
          >
            <i className="ri-menu-3-fill"></i>
          </div>
        </div>

        <Header data={wallPaper} />

        <div className="w-full px-5 flex items-center justify-between">
          <h1 className="text-zinc-400 font-semibold text-2xl">Trending</h1>
          <DropDown
            handleChange={(e) => setTrendValue(e.target.value)}
            title={"Filter"}
            options={["all", "tv", "movie"]}
            icon={<i className="ri-filter-fill"></i>}
            width="w-48"
          />
        </div>

        <HorizontalCards data={trending} />

        {sideNav && (
          <div onClick={(e)=>{
            e.stopPropagation();
            return setSideNav(prev=>!prev)}} className="xl:hidden w-full h-screen backdrop-blur-[2px] bg-black/20 absolute flex justify-end top-0 right-0">
            <SideNav sideNav={sideNav} setSideNav={setSideNav} />
          </div>
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
