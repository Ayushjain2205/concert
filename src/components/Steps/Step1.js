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
      <div className="form-control">
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
      <div className="form-control w-2/3 ">
        <label className="label">
          <span className="label-text text-[16px]">
            Which category does your dataset belong to?
          </span>
        </label>
        <input
          type="text"
          placeholder="Category"
          className="input input-bordered input-primary focus:outline-none"
        />
      </div>
      <div className="form-control w-2/3 ">
        <label className="label">
          <span className="label-text text-[16px]">
            Give your dataset a brief description:
          </span>
        </label>
        <textarea
          className="textarea textarea-primary focus:outline-none"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="form-control w-2/3 relative mb-[20px]">
        <label className="label">
          <span className="label-text text-[16px]">Set a price:</span>
        </label>
        <input
          type="number"
          placeholder="Add Price"
          value={100}
          className="input input-bordered input-primary focus:outline-none pl-[40px]"
        />
        <img
          src="/icons/royale-coin.svg"
          className="h-[25px] absolute left-2 top-[58px] transform -translate-y-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Step1;
