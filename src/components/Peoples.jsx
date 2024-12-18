import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Peoples() {
    const navigate = useNavigate();
    const [peoples, setPeoples] = useState([]);
    const [pageNo, setpageNo] = useState(1);
    const [hasMoreVal, setHasMoreVal] = useState(true);
  
    document.title = "SCSDB | Peoples";
  
    const getPeoples = async () => {
      try {
        const { data } = await axios.get(`/person/popular?page=${pageNo}`);

        if (data.results.length > 0) {
          setPeoples((prev) => [...prev, ...data.results]);
          setpageNo(prev => prev + 1);
        } else {
          setHasMoreVal(false);
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
  
    const refreshHandler = () => {
      if (peoples.length === 0) {
        getPeoples();
      } else {
        setpageNo(1);
        setPeoples([]);
        getPeoples();
      }
    };
  
    useEffect(() => {
      refreshHandler();
    }, []);


  return peoples.length > 0 ? (
    <div className="pt-5 w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-5">
        <div className="flex w-fit items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 font-semibold">Peoples</h1>
        </div>
        <div className="w-[90%] flex items-center gap-5">
          <div className="w-full">
            <TopNav />
          </div>
        </div>
      </div>

      <InfiniteScroll
        loader={<h4 className="text-center w-full py-3">Loading...</h4>}
        dataLength={peoples.length}
        next={getPeoples}
        hasMore={hasMoreVal}
      >
        <Cards data={peoples} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Peoples