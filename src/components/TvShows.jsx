import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import DropDown from "./Partials/DropDown";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function TvShows() {
    const navigate = useNavigate();
    const [tvShows, setTvShows] = useState([]);
    const [Catogories, setCatogories] = useState("airing_today");
    const [pageNo, setpageNo] = useState(1);
    const [hasMoreVal, setHasMoreVal] = useState(true);
  
    document.title = "SCSDB | Tv Shows" + "-" + Catogories.toUpperCase();
  
    const getTvShows = async () => {
      try {
        const { data } = await axios.get(`/tv/${Catogories}?page=${pageNo}`);

        if (data.results.length > 0) {
          setTvShows((prev) => [...prev, ...data.results]);
          setpageNo(prev => prev + 1);
        } else {
          setHasMoreVal(false);
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
  
    const refreshHandler = () => {
      if (tvShows.length === 0) {
        getTvShows();
      } else {
        setpageNo(1);
        setTvShows([]);
        getTvShows();
      }
    };
  
    useEffect(() => {
      refreshHandler();
    }, [Catogories]);


  return tvShows.length > 0 ? (
    <div className="pt-5 w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-5">
        <div className="flex w-fit items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 font-semibold">Tv Shows</h1>
        </div>
        <div className="w-[90%] flex items-center gap-5">
          <div className="w-full">
            <TopNav />
          </div>
          <DropDown
            title={"Catogories"}
            options={["popular","top_rated","on_the_air", "airing_today"]}
            handleChange={(e) => {
              setCatogories(e.target.value);
            }}
            icon={<i className="ri-apps-2-add-line"></i>}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h4 className="text-center w-full py-3">Loading...</h4>}
        dataLength={tvShows.length}
        next={getTvShows}
        hasMore={hasMoreVal}
      >
        <Cards data={tvShows} title="tv"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows