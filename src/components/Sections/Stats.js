import React from "react";
import Chart1 from "../Charts/Chart1";
import Chart2 from "../Charts/Chart2";
import Chart3 from "../Charts/Chart3";
import Chart4 from "../Charts/Chart4";
import Chart5 from "../Charts/Chart5";
import Chart6 from "../Charts/Chart6";

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-[40px] my-[40px]">
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart1 />
      </div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart2 />
      </div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart3 />
      </div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart4 />
      </div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart5 />
      </div>
      <div className="rounded-xl bg-white p-4 ring ring-indigo-50 w-[334px] h-[225px]">
        <Chart6 />
      </div>
    </div>
  );
};

export default Stats;
