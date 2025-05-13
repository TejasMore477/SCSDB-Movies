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

      <div className="flex items-center gap-5 px-5">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-zinc-400 font-semibold sm:text-xl text-lg">Peoples</h1>
      </div>

      <div className="w-full flex items-center justify-end px-8 mt-3">
        <div className="w-[100%] lg:flex items-center gap-5">
          <div className="xl:w-[50%] lg:w-[80%] w-full flex items-end md:items-start">
            <TopNav justify={"justify-start"} />
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