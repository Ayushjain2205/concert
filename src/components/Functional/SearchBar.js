import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-[720px]">
      <input
        type="text"
        placeholder="Search datasets"
        className="input input-bordered border-2 input-primary w-full focus:outline-none pl-4 pr-10 rounded-[20px]" // adjusted padding to ensure text doesn't overlap with the icon
      />
      <i className="fa-solid fa-magnifying-glass absolute top-1/2 transform -translate-y-1/2 right-5 text-primary"></i>
    </div>
  );
};

export default SearchBar;
