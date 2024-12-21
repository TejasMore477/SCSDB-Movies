import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { AsyncMountTv, unMountTvInfo } from "../store/actions/TvActoin";
import TopNav from "./Partials/TopNav";
import Loading from "../components/Loading";
import HorizontalCards from "./Partials/HorizontalCards";
import WatchTrailer from "./Partials/WatchTrailer";

function TvDetails() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { Info } = useSelector((state) => state.TvInfo);
  let FnineImages = [];

  if (Info && Info.images && Info.images.length > 0) {
    FnineImages = Info.images.slice(0, 20);
  }

  useEffect(() => {
    if (id) {
      dispatch(AsyncMountTv(id));
    }

    return () => {
      dispatch(unMountTvInfo());
    };
  }, [id, dispatch]);

  return Info && Info.details ? (
    <div className="w-full min-h-screen p-5 relative">
      <div className="w-full flex items-center justify-between px-5 mb-3">
        <div className="flex items-center gap-5 text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
          ></i>
          <h1 className="text-zinc-400  text-xl font-semibold">
            TV-Show Details
          </h1>
          <Link to={"/"}>
            <i className="text-zinc-300 text-xl ri-home-3-line"></i>
          </Link>
        </div>
        <div className="w-[80%] flex items-center gap-5">
          <TopNav />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            Info.details.backdrop_path || Info.details.poster_path
          })`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[80vh]  rounded-md"
      >
        <div className="h-full w-full bg-zinc-800 bg-opacity-50 backdrop-blur-[0px] px-20 py-10">
          {/* Part-one links */}
          <div className="flex items-center justify-start gap-5">
            <a
              target="_blank"
              className="text-yellow-400"
              href={`https://www.imdb.com/title/${Info.externalId.imdb_id}/`}
            >
              IMDB
            </a>
            <a
              target="_blank"
              className="text-zinc-100"
              href={Info.details.homepage}
            >
              <i className=" text-lg ri-clapperboard-line"></i>
            </a>
            <a
              target="_blank"
              className="text-zinc-100"
              href={`https://www.wikidata.org/wiki/${Info.externalId.wikidata_id}`}
            >
              <i className=" text-lg ri-earth-fill"></i>
            </a>
          </div>

          {/* part2 card & movie details */}
          <div className="w-full mt-10 flex items-center justify-start gap-20">
            <img
              className="w-[20vw] h-[50vh] object-cover object-center shadow-zinc-950 shadow-lg"
              src={`https://image.tmdb.org/t/p/original/${
                Info.details.poster_path || Info.details.backdrop_path
              }`}
              alt={
                Info.details.title ||
                Info.details.original_title ||
                Info.details.original_name ||
                Info.details.name
              }
            />
            <div className="w-[70vw]">
              <h1 className="text-5xl">
                {Info.details.title ||
                  Info.details.original_title ||
                  Info.details.original_name ||
                  Info.details.name}
              </h1>
              <h3 className="text-2xl">
                {Info.details.first_air_date.split("-")[0]}
              </h3>

              <div className="flex items-start justify-start gap-10">
                {!isNaN(Info.details.vote_average) && (
                  <h3>
                    <i className="text-yellow-400 ri-star-s-fill"></i>
                    {Info.details.vote_average.toFixed(1)}
                  </h3>
                )}

                {Info.details.genres.length > 0 && (
                  <span>
                    {Info.details.genres.map((elem) => elem.name).join(", ")}
                  </span>
                )}
              </div>

              <h3 className="text-zinc-300 text-2xl mt-5 mb-2">
                {Info.details.tagline}
              </h3>

              <p className="text-base mb-5">{Info.details.overview}</p>

              {/* watch trailer */}
              <WatchTrailer pathname={pathname} />

              {/* watch providers */}
              <div className="w-full h-fit flex items-center justify-start gap-10 mt-5">
                {" "}
                {Info.watchProviders && Info.watchProviders.flatrate && (
                  <div className="flex mt-5 items-center justify-start gap-2">
                    <h3 className="mr-3">Available on :</h3>
                    {Info.watchProviders.flatrate.map((item, index) => (
                      <img
                        key={index}
                        className="size-8 object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        alt={item.provider_name}
                      />
                    ))}
                  </div>
                )}
                {Info.watchProviders && Info.watchProviders.buy && (
                  <div className="flex mt-5 items-center justify-start gap-2">
                    <h3 className="mr-3">Buy on :</h3>
                    {Info.watchProviders.buy.map((item, index) => (
                      <img
                        key={index}
                        className="size-8 object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        alt={item.provider_name}
                      />
                    ))}
                  </div>
                )}
                {Info.watchProviders && Info.watchProviders.rent && (
                  <div className="flex mt-5 items-center justify-start gap-2">
                    <h3 className="mr-3">Rent on :</h3>
                    {Info.watchProviders.rent.map((item, index) => (
                      <img
                        key={index}
                        className="size-8 object-cover object-center"
                        src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                        alt={item.provider_name}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* seasons */}
            {Info.details.seasons && (
        <div className="px-10 ">
          <h1 className="text-3xl capitalize text-[#6556CD] my-3">Seasons</h1>
          <div className="w-full flex items-center justify-start gap-3 overflow-auto">
            {Info.details.seasons.map((ses, index) => (
              <div
                key={index}
                className="w-[13vw] h-[40vh] shrink-0 cursor-pointer relative"
              >
                <img
                  className="w-full h-[35vh] object-cover object-center shadow-zinc-950 shadow-lg"
                  src={`https://image.tmdb.org/t/p/original/${
                    ses.poster_path || ses.backdrop_path || ses.profile_path
                  }`}
                  alt={
                    ses.title ||
                    ses.original_title ||
                    ses.original_name ||
                    ses.name
                  }
                />
                <h1 className="w-full my-2 text-base leading-none">
                  {
                    ses.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* images */}
      <div className="w-full px-10 mt-10">
        <h1 className="text-3xl capitalize mb-5 text-[#6556CD]">Images</h1>
        {FnineImages.length > 0 && (
          <div className="h-fit w-full flex items-center justify-start flex-shrink-0 flex-wrap overflow-auto gap-1">
            {FnineImages.map((image, index) => (
              <img
                loading="lazy"
                key={index}
                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                className="h-[20vh] w-[15vw] object-center object-cover mb-2"
              />
            ))}
          </div>
        )}
        <hr className=" border-none h-[1px] bg-zinc-500 my-5 " />
      </div>

      {/* resommendations */}

      <div className="px-10">
        <h1 className="text-3xl capitalize text-[#6556CD]">
          recommendations & similars
        </h1>
        {(Info.recommendations.length > 0 && (
          <HorizontalCards data={Info.recommendations} />
        )) ||
          (Info.similar.length > 0 && <HorizontalCards data={Info.similar} />)}
      </div>

      {/* trailer */}
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default TvDetails;
