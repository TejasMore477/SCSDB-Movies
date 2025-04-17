import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import DropDown from "./Partials/DropDown";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trendings() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [Catogories, setCatogories] = useState("all");
  const [duration, setDuration] = useState("day");
  const [pageNo, setpageNo] = useState(1);
  const [hasMoreVal, setHasMoreVal] = useState(true);

  document.title =
    "SCSDB | Trending" +
    "-" +
    Catogories.toUpperCase() +
    "/" +
    duration.toUpperCase();

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${Catogories}/${duration}?page=${pageNo}`
      );

      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setpageNo((prev) => prev + 1);
      } else {
        setHasMoreVal(false);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpageNo(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [Catogories, duration]);

  return trending.length > 0 ? (
    <div className="pt-5 w-full overflow-x-hidden">

      <div className="flex items-center gap-5 text-2xl px-8 xl:bg-red-900 lg:bg-fuchsia-900 md:bg-green-900 sm:bg-orange-900">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-zinc-400 font-semibold">Trending</h1>
      </div>

      <div className="w-full flex items-center justify-end px-8 mt-3 xl:bg-red-9000 lg:bg-fuchsia-9000 md:bg-green-9000 sm:bg-orange-9000">
        <div className="w-[100%] lg:flex items-center gap-5">

            <div className="xl:w-[50%] lg:w-[80%] w-full flex items-end md:items-start bg-red-3000">
            <TopNav justify={"justify-start"}/>
            </div>

          <div className="xl:w-auto lg:w-[40%] flex sm:justify-end justify-center items-center gap-5 bg-yellow-2000 lg:pt-0 pt-2">
            <div className="xl:w-full lg:w-[30%] md:w-[20%] w-[30%] bg-yellow-6000 ">
            <DropDown
            title={"Catogories"}
            options={["tv", "movie", "all"]}
            handleChange={(e) => {
              setCatogories(e.target.value);
            }}
            icon={<i className="ri-apps-2-add-line"></i>}
          />
            </div>

            <div className="xl:w-full lg:w-[30%] md:w-[20%] w-[30%] bg-yellow-6000">
            <DropDown
            title={"Duration"}
            options={["day", "week"]}
            handleChange={(e) => {
              setDuration(e.target.value);
            }}
            icon={<i className="ri-timer-2-fill"></i>}
          />
            </div>

          </div>
        </div>
      </div>

      <InfiniteScroll
        loader={<h4 className="text-center w-full py-3">Loading...</h4>}
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMoreVal}
      >
        <Cards data={trending} title={Catogories} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trendings;
