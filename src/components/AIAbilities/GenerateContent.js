import React, { useState } from "react";
import FileSelect from "../Functional/FileSelect";

const GenerateContent = () => {
  const [category, setCategory] = useState(""); // Track selected category
  const [buttonState, setButtonState] = useState("initial"); // "initial", "generating", "download"

  const handleGenerateClick = () => {
    setButtonState("generating");

    // After 3 seconds, replace the generating button with the download button
    setTimeout(() => {
      setButtonState("download");
    }, 3000);
  };

  return (
    <div className="">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[16px]">Select files</span>
        </label>
        <FileSelect />
      </div>

      <div className="form-control mt-4">
        <span className="label-text text-[16px] mb-2 block">
          Choose category
        </span>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2 "
            value="Generate summary"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate summary
        </label>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2"
            value="Generate 10 key points"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate 10 key points
        </label>
        <label className="cursor-pointer inline-flex items-center mr-3 text-[20px]">
          <input
            type="radio"
            name="category"
            className="mr-2"
            value="Generate flash card"
            onChange={(e) => setCategory(e.target.value)}
          />
          Generate flash card
        </label>
      </div>

      {buttonState === "initial" && (
        <button
          className="btn btn-outline btn-primary w-full rounded-xl mt-[64px]"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
      )}

      {buttonState === "generating" && (
        <button
          className="btn btn-outline btn-primary w-full rounded-xl mt-[64px]"
          disabled
        >
          Generating... <span className="loading loading-spinner"></span>
        </button>
      )}

      {buttonState === "download" && (
        <button className="btn btn-active btn-primary w-full rounded-xl mt-4">
          Download <i className="fa-solid fa-file-arrow-down"></i>
        </button>
      )}
    </div>
  );
};

export default GenerateContent;
