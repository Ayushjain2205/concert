import React from "react";

const Step2 = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-[32px]">Rules</h4>
      <div className="form-control w-2/3 ">
        <label className="label">
          <span className="label-text text-[16px]">Max file size in MB?</span>
        </label>
        <input
          type="number"
          placeholder="File Size"
          value={50}
          className="input input-bordered input-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-1/3 ">
        <label className="label">
          <span className="label-text text-[16px]">AI actions:</span>
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">File Summary</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">Chat with File</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text text-[20px]">Generate content</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
      <div className="flex flex-col w-1/3 "></div>
    </div>
  );
};

export default Step2;
