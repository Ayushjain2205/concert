import React from "react";

const Step4 = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h4 className="text-[32px]">Confirm</h4>
      <div className="flex flex-row gap-[10px] rounded-xl p-4 ring ring-indigo-50 bg-[#B8B8FF40] w-[550px] mx-auto">
        <img src="/icons/pdf.svg" className="h-[150px]" alt="" />
        <div className="flex flex-col gap-[10px]">
          <h4 className="font-bold text-[20px]">Dataset Name</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            cumque nemo quas minus nisi explicabo odit perspiciatis eos incidunt
            laboriosam est quisquam doloribus unde labore optio consectetur,
            nesciunt ut perferendis!
          </p>
          <span>
            <i className="fa-regular fa-file"></i> 5 files
          </span>
        </div>
      </div>
      <label className="label cursor-pointer w-max flex flex-row gap-[10px] mx-auto">
        <input type="checkbox" className="checkbox checkbox-primary" />
        <span className="label-text text-[20px]">
          I Agree to the terms and conditions{" "}
        </span>
      </label>
      <button className="btn btn-outline btn-primary rounded-xl mx-auto mt-[10px] w-[550px]">
        Confirm
      </button>
    </div>
  );
};

export default Step4;
