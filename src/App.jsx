import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Trendings from "./components/Trendings";

function App() {
  return (
    <div className="w-full h-full bg-[#1F1E24] text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendings" element={<Trendings />} />
      </Routes>
    </div>
  );
}

export default App;
