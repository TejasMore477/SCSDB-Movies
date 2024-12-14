import React from "react";
import SideNav from "./Partials/SideNav";

function Home() {
    document.title = "SCSDB | Homepage"
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full"></div>
    </>
  );
}

export default Home;
