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

  const handleChange = (event) => {
    setTrendValue(event.target.value);
  };

  useEffect(() => {
    wallPaper.length === 0 && getWallPaper();
    getTrending();
  }, [TrendValue]);

  return wallPaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-y-auto">
        <TopNav />
        <Header data={wallPaper} />
        <DropDown handleChange={handleChange} title={"Filter"} options={["all", "tv", "movie"]}/>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
