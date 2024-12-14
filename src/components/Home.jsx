import React from "react";
import SideNav from "./Partials/SideNav";
import TopNav from "./Partials/TopNav";

function Home() {
    document.title = "SCSDB | Homepage"
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav/>
      </div>
    </>
  );
}

export default Home;
