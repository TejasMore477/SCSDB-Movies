import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Trendings from "./components/Trendings";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="w-full h-full bg-[#1F1E24] text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendings" element={<Trendings />} />
        <Route path="/populars" element={<Popular />} />
      </Routes>
    </div>
  );
}

export default App;
