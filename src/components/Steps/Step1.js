import React, { useState } from "react";

const Step1 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileFormats = ["pdf", "csv", "png", "jpeg", "ppt", "xls"];

  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-[32px]">About</h4>
      <div className="form-control w-2/3 ">
        <label className="label">
          <span className="label-text text-[16px]">
            What would you like to call your dataset?
          </span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-primary focus:outline-none"
        />
      </div>
      <div className="form-control  ">
        <label className="label">
          <span className="label-text text-[16px]">Select Dataset Format:</span>
        </label>
        <div className="flex flex-row gap-[20px]">
          {fileFormats.map((format, index) => (
            <div
              key={index}
              onClick={() => setSelectedFile(format)}
              className={`flex w-max rounded-xl p-2 ring ring-indigo-50 cursor-pointer ${
                selectedFile === format ? "bg-[#B8B8FF70]" : ""
              }`}
            >
              <img
                src={`/file-types/${format}.svg`}
                className="h-[60px]"
                alt={format}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
