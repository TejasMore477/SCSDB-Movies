import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TopNav from "./Partials/TopNav";
import DropDown from "./Partials/DropDown";
import axios from "../utils/Axios";
import Cards from "./Partials/Cards";
import Loading from "./Loading";

function Trendings() {
  const navigate = useNavigate();
  const [trending, setTrending] = useState([]);
  const [Catogories, setCatogories] = useState("all");
  const [duration, setDuration] = useState("day");

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${Catogories}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [Catogories, duration]);

  return trending.length > 0 ? (
    <div className="h-full w-full overflow-hidden overflow-y-auto px-5">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400 font-semibold">Trending</h1>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="w-full">
            <TopNav />
          </div>
          <DropDown
            title={"Catogories"}
            options={["tv", "movie", "all"]}
            handleChange={(e) => {
              setCatogories(e.target.value);
            }}
            icon={<i class="ri-apps-2-add-line"></i>}
          />
          <DropDown
            title={"Duration"}
            options={["day", "week"]}
            handleChange={(e) => {
              setDuration(e.target.value);
            }}
            icon={<i class="ri-timer-2-fill"></i>}
          />
        </div>
      </div>
      <Cards data={trending} />
    </div>
  ) : (
    <Loading />
  );
}

export default Trendings;
