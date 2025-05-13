import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import TopNav from "./Partials/TopNav";
import Loading from "../components/Loading";
import HorizontalCards from "./Partials/HorizontalCards";
import {
  asyncMountPerson,
  unMountPeopleInfo,
} from "../store/actions/PeopleAction";
import noImage from "/NoImage.jpg";
import DropDown from "./Partials/DropDown";

function PeopleDetails() {
  const [category, setCategory] = useState("movie");

  const { Info } = useSelector((state) => state.PeopleInfo);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(asyncMountPerson(id));
    }

    return () => {
      dispatch(unMountPeopleInfo());
    };
  }, [id, dispatch]);

  return Info ? (
    <div className="w-full min-h-screen p-5 relative">
      <div className="flex items-center gap-5 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-zinc-400 font-semibold sm:text-xl text-lg">Person Details</h1>
        <Link to={"/"}>
            <i className="text-zinc-300 sm:text-xl text-lg ri-home-3-line"></i>
          </Link>
      </div>

      <div className="w-full flex items-center justify-start lg:px-8 mt-3">
        <div className="xl:w-[50%] lg:w-[80%] w-full flex items-start">
          <TopNav justify={"justify-start"} />
        </div>
      </div>

      <div className="w-full lg:px-5 py-5 flex items-start justify-between text-zinc-400">
        {Info.details && (
          <div className="flex w-full flex-col xl:flex-row">
            <div className="px-5 xl:w-[20%] w-full flex xl:flex-col items-center justify-center sm:justify-start gap-10">
              <div>
                <img
                  className="lg:w-56 lg:h-80 w-52 h-72 object-cover object-top shadow-zinc-950 shadow-lg rounded-md"
                  src={
                    Info.details.profile_path
                      ? `https://image.tmdb.org/t/p/original/${Info.details.profile_path}`
                      : noImage
                  }
                  alt={Info.details.name}
                />

                {/* links */}
                <div className="text-xl flex items-center justify-center gap-5 my-3 pb-1 border-b-[1px] border-zinc-600">
                  {Info.externalId.facebook_id && (
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/${Info.externalId.facebook_id}/`}
                    >
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                  )}

                  {Info.externalId.instagram_id && (
                    <a
                      target="_blank"
                      href={`https://www.instagram.com/${Info.externalId.instagram_id}/`}
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  )}

                  {Info.externalId.wikidata_id && (
                    <a
                      target="_blank"
                      href={`https://www.wikidata.org/wiki/${Info.externalId.wikidata_id}/`}
                    >
                      <i className="ri-earth-fill"></i>
                    </a>
                  )}

                  {Info.externalId.twitter_id && (
                    <a
                      target="_blank"
                      href={`https://x.com/${Info.externalId.twitter_id}/`}
                    >
                      <i className="ri-twitter-x-line"></i>
                    </a>
                  )}
                </div>
              </div>

              {/* presnol details */}
              <div className="mt-3 hidden sm:block">
                <h1 className="text-lg leading-none text-zinc-500">
                  Known For Department
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.known_for_department}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">Gender</h1>
                <p className="mb-2 leading-none">
                  {Info.details.gender === 2 ? "Male" : "Female"}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">Birthday</h1>
                <p className="mb-2 leading-none">{Info.details.birthday}</p>

                <h1 className="text-lg leading-non text-zinc-500">Deathday</h1>
                {Info.details.deathday ? (
                  <p className="text-md mb-2 leading-none">
                    {Info.details.deathday}
                  </p>
                ) : (
                  <p className="mb-2 leading-none">Still Alive</p>
                )}

                <h1 className="text-lg leading-non text-zinc-500">
                  Place Of Birth
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.place_of_birth}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">
                  Also Know AS
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.also_known_as.map((name) => name).join(", ")}
                </p>
              </div>
            </div>            

            <div className="xl:w-[80%] w-full lg:pl-10">
              <h1 className="sm:text-4xl text-2xl font-semibold">{Info.details.name}</h1>

              {/* biography */}
              <h2 className="sm:text-2xl text-xl font-semibold mt-3">Biography</h2>
              <p className="mt-3 mb-5">{Info.details.biography}</p>

              <div className="my-3 bg-blue-5000 block sm:hidden">
                <h1 className="text-lg leading-none text-zinc-500">
                  Known For Department
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.known_for_department}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">Gender</h1>
                <p className="mb-2 leading-none">
                  {Info.details.gender === 2 ? "Male" : "Female"}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">Birthday</h1>
                <p className="mb-2 leading-none">{Info.details.birthday}</p>

                <h1 className="text-lg leading-non text-zinc-500">Deathday</h1>
                {Info.details.deathday ? (
                  <p className="text-md mb-2 leading-none">
                    {Info.details.deathday}
                  </p>
                ) : (
                  <p className="mb-2 leading-none">Still Alive</p>
                )}

                <h1 className="text-lg leading-non text-zinc-500">
                  Place Of Birth
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.place_of_birth}
                </p>

                <h1 className="text-lg leading-non text-zinc-500">
                  Also Know AS
                </h1>
                <p className="mb-2 leading-none">
                  {Info.details.also_known_as.map((name) => name).join(", ")}
                </p>
              </div>

              {/* contributions */}
              <h3 className="sm:text-2xl text-xl font-semibold">Contributions</h3>
              <HorizontalCards data={Info.combinedCredits.cast} />

              {/* work and rols */}
              <div className="flex  items-center sm:justify-start sm:gap-10 justify-between mb-4">
                <h3 className="sm:text-2xl text-xl font-semibold">Work and Roles</h3>
                <div className="w-1/2 sm:w-fit">
                  <DropDown
                    handleChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    icon={""}
                    title={"categories"}
                    options={["tv", "movie"]}
                  />
                </div>
              </div>

              <div className="border-[1px] border-zinc-700 list-disc text-zinc-400 w-full h-[50vh] overflow-y-auto overflow-x-hidden p-5 grid grid-cols-1 sm:grid-cols-2">
                {Info[category + "Credits"].cast.map((ele, index) => (
                  <li
                    key={index}
                    className="hover:text-white duration-300 cursor-pointer py-2 hover:bg-[#6556CD] hover:bg-opacity-10"
                  >
                    <Link to={`/${category}/details/${ele.id}`}>
                      <h3 className="inline">
                        <span className="capitalize">{category} : </span>
                        {ele.title || ele.original_title || ele.original_name}
                      </h3>

                      {ele.character && (
                        <h3 className="capitalize ml-5">
                          <span>character : </span>
                          {ele.character}
                        </h3>
                      )}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PeopleDetails;
