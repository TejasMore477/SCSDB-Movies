import React, { useEffect, useState } from "react";
import SideNav from "./Partials/SideNav";
import TopNav from "./Partials/TopNav";
import Header from "./Partials/Header";
import axios from "../utils/Axios";
import Loading from "./Loading";

function Home() {
  document.title = "SCSDB | Homepage";
  const [wallPaper, setWallpaper] = useState([]);
  const [trending, setTrending] = useState([]);

  const getWallPaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomWallPaper = data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomWallPaper);
    } 
    catch (error) {
      console.log("Error : ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      setTrending(data.results);
    } 
    catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    wallPaper.length === 0 && getWallPaper();
    wallPaper.length === 0 && getTrending();
  }, []);

  return ( wallPaper && trending ?
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav />
        <Header data={wallPaper} />
      </div>
    </> : <Loading/>
  );
}

export default Home;
