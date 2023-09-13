import React from "react";
import SearchBar from "../components/Functional/SearchBar";
import SideBar from "../components/Functional/SideBar";
import DatasetCard from "../components/Cards/DatasetCard";

const Explore = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <SearchBar />
      <div className="flex flex-row w-full mt-[30px] gap-[60px]">
        <SideBar />
        <div className="flex flex-col gap-[25px]">
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
