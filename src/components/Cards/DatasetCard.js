import React from "react";

const DatasetCard = () => {
  return (
    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <img src="/icons/image.svg" className="h-[100px]" alt="" />

        <div>
          <strong className="rounded-xl border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            Category
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="" className="">
              Some Interesting Dataset title
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div
              data-tip="Users"
              className="flex items-center tooltip gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-users"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div
              data-tip="Files"
              className="flex tooltip items-center gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-file"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div
              data-tip="Forks"
              className="flex tooltip items-center gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-code-fork"></i>
              <span>200</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <img src="/icons/royale-coin.svg" className=" w-[60px]" alt="" />
          <span className="font-bold">50</span>
        </div>
      </div>
    </article>
  );
};

export default DatasetCard;
