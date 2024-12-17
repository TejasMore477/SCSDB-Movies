import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import DropDown from "./Partials/DropDown";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const [Catogories, setCatogories] = useState("movie");
  const [pageNo, setpageNo] = useState(1);
  const [hasMoreVal, setHasMoreVal] = useState(true);

  document.title = "SCSDB | Popular" + "-" + Catogories.toUpperCase();

  const getPopulars = async () => {
    try {
      const { data } = await axios.get(`/${Catogories}/popular?page=${pageNo}`);

      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setpageNo(prev => prev + 1);
      } else {
        setHasMoreVal(false);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopulars();
    } else {
      setpageNo(1);
      setPopular([]);
      getPopulars();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [Catogories]);

  return popular.length > 0 ? (
    <div className="pt-5 w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-5">
        <div className="flex items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 font-semibold">popular</h1>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <TopNav />
          </div>
          <DropDown
            title={"Catogories"}
            options={["tv", "movie"]}
            handleChange={(e) => {
              setCatogories(e.target.value);
            }}
            icon={<i className="ri-apps-2-add-line"></i>}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h4 className="text-center w-full py-3">Loading...</h4>}
        dataLength={popular.length}
        next={getPopulars}
        hasMore={hasMoreVal}
      >
        <Cards data={popular} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
