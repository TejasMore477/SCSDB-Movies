import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import DropDown from "./Partials/DropDown";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [Catogories, setCatogories] = useState("now_playing");
    const [pageNo, setpageNo] = useState(1);
    const [hasMoreVal, setHasMoreVal] = useState(true);
  
    document.title = "SCSDB | Movies" + "-" + Catogories.toUpperCase();
  
    const getMovies = async () => {
      try {
        const { data } = await axios.get(`/movie/${Catogories}?page=${pageNo}`);

        if (data.results.length > 0) {
          setMovies((prev) => [...prev, ...data.results]);
          setpageNo(prev => prev + 1);
        } else {
          setHasMoreVal(false);
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
  
    const refreshHandler = () => {
      if (movies.length === 0) {
        getMovies();
      } else {
        setpageNo(1);
        setMovies([]);
        getMovies();
      }
    };
  
    useEffect(() => {
      refreshHandler();
    }, [Catogories]);

  return movies.length > 0 ? (
    <div className="pt-5 w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-5">
        <div className="flex items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 font-semibold">Movies</h1>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <TopNav />
          </div>
          <DropDown
            title={"Catogories"}
            options={["popular","top_rated","upcoming", "now_playing"]}
            handleChange={(e) => {
              setCatogories(e.target.value);
            }}
            icon={<i className="ri-apps-2-add-line"></i>}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h4 className="text-center w-full py-3">Loading...</h4>}
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMoreVal}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movies