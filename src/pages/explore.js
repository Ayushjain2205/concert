import React from "react";
import SearchBar from "../components/Functional/SearchBar";
import SideBar from "../components/Functional/SideBar";

const Explore = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <SearchBar />
      <div className="flex flex-row">
        <SideBar />
      </div>
    </div>
  );
};

export default Explore;
