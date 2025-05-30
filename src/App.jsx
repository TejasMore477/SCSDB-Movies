import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Trendings from "./components/Trendings";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Peoples from "./components/Peoples";
import MovieDetails from "./components/MovieDetails";
import PeopleDetails from "./components/PeopleDetails";
import TvDetails from "./components/TvDetails";
import Trailer from "./components/Partials/Trailer";
import NotFound from "./components/NotFound";
import About from "./components/About";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="w-full h-full bg-[#1F1E24] text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendings" element={<Trendings />} />
        <Route path="/populars" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/peoples" element={<Peoples />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
