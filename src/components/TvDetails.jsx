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
  const { id } = useParams();
  const { Info } = useSelector((state) => state.TvInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <div className="flex items-center gap-5 text-2xl">
        <i
          onClick={() => navigate(-1)}
          className="text-[#6556CD] ri-arrow-left-line active:text-[#503ecb] cursor-pointer"
        ></i>
        <h1 className="text-zinc-400 font-semibold md:text-xl text-lg">
          TV-Show Details
        </h1>
        <Link to={"/"}>
          <i className="text-zinc-300 md:text-xl text-lg ri-home-3-line"></i>
        </Link>
      </div>

      <div className="w-full flex items-center justify-start lg:px-8 my-2">
        <div className="xl:w-[50%] lg:w-[60%] w-full flex items-start">
          <TopNav justify={"justify-start"} />
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
        className="w-full lg:h-[80vh] rounded-md"
      >
        <div className="h-full w-full bg-zinc-800 bg-opacity-50 backdrop-blur-[0px] xl:px-20 md:py-10 md:px-10 p-3">

          <div className="w-full lg:mt-10 flex lg:flex-row flex-col lg:items-center justify-start xl:gap-20 md:gap-10 gap-5">
            <div>
              <img
                className="lg:w-64 lg:h-96 sm:w-56 sm:h-80 w-48 h-72 object-cover object-center shadow-zinc-950 shadow-lg"
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
              <div className="flex lg :items-center lg:justify-center mt-2 gap-5 pl-10 lg:pl-0">
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
            </div>

            <div className="md:w-[70vw] bg-blue-9000">
              <h1 className="sm:text-5xl text-3xl">
                {Info.details.title ||
                  Info.details.original_title ||
                  Info.details.original_name ||
                  Info.details.name}
              </h1>
              <h3 className="sm:text-2xl text-lg">
                {Info.details.first_air_date.split("-")[0]}
              </h3>

              <div className="flex items-start justify-start gap-10 md:text-lg text-sm">
                {!isNaN(Info.details.vote_average) && (
                  <h3>
                    <i className="text-yellow-400 ri-star-s-fill"></i>
                    {Info.details.vote_average.toFixed(1)}
                  </h3>
                )}

                {Info.details.genres.length > 0 && (
                  <span className="sm:text-lg text-sm">
                    {Info.details.genres.map((elem) => elem.name).join(", ")}
                  </span>
                )}
              </div>

              <h3 className="text-zinc-300 md:text-2xl text-lg mt-5 mb-2">
                {Info.details.tagline}
              </h3>

              <p className="sm:text-base text-sm mb-5">
                {Info.details.overview}
              </p>

              {/* watch trailer */}
              <WatchTrailer pathname={pathname} />

              {/* watch providers */}
              <div className="w-full h-fit flex items-center justify-start gap-10 mt-5">
                {" "}
                {Info.watchProviders && Info.watchProviders.flatrate && (
                  <div className="flex mt-5 items-center justify-start gap-2">
                    <h3 className="mr-3 text-sm md:text-base">
                      Available on :
                    </h3>
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
        <div className="lg:px-10 ">
          <h1 className="md:text-2xl text-xl capitalize text-[#6556CD] my-3">
            Seasons
          </h1>
          <div className="w-full flex items-center justify-start gap-3 overflow-x-auto">
            {Info.details.seasons.map((ses, index) => (
              <div key={index} className="shrink-0 cursor-pointer relative">
                <img
                  className="lg:w-56 lg:h-80 sm:w-44 sm:h-64 w-36 h-52 object-cover object-center shadow-zinc-950 shadow-lg"
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
                <h1 className="w-full my-2 md:text-base text-sm leading-none">
                  {ses.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* images */}
      <div className="w-full lg:px-10 mt-10">
        <h1 className="sm:text-2xl text-xl capitalize mb-5 text-[#6556CD]">
          Images
        </h1>
        {FnineImages.length > 0 && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
            {FnineImages.map((image, index) => (
              <img
                loading="lazy"
                key={index}
                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                className="w-full sm:aspect-video object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                alt={`TV show image ${index + 1}`}
              />
            ))}
          </div>
        )}
        <hr className=" border-none h-[1px] bg-zinc-500 my-5 " />
      </div>

      {/* resommendations */}
      <div className="lg:px-10">
        <h1 className="md:text-2xl text-xl capitalize text-[#6556CD]">
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
