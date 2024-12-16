import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Trendings from "./components/Trendings";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] text-white flex pt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendings" element={<Trendings />} />
      </Routes>
    </div>
  );
}

export default App;
