import React from "react";

const DataSetPage = () => {
  return (
    <div className="flex flex-row gap-[40px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[10px] w-[350px] rounded-xl p-4 ring ring-indigo-50 bg-[#B8B8FF40]">
          <div>
            <img src="/icons/pdf.svg" className="h-[200px]" alt="" />
          </div>
          <p className="font-bold text-[20px]">Dataset Name</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint.
          </p>
          <div>
            <strong className="rounded-[20px] border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Category
            </strong>
          </div>
          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-[8px] text-[#9381FF]">
              <i class="fa-solid fa-users"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div className="flex items-center gap-[8px] text-[#9381FF]">
              <i class="fa-solid fa-file"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div className="flex items-center gap-[8px] text-[#9381FF]">
              <i class="fa-solid fa-code-fork"></i>
              <span>200</span>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-primary rounded-[20px]">
          Buy with 50{" "}
          <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
        </button>
      </div>
      <div>mAIN</div>
    </div>
  );
};

export default DataSetPage;
