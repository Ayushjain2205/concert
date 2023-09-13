import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const DataSetPage = () => {
  return (
    <div className="flex flex-row gap-[60px]">
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
      <div className="rounded-xl p-4 ring ring-indigo-50 ">
        <Tabs.Root className="flex flex-col w-[1000px]" defaultValue="tab1">
          <Tabs.List
            className="shrink-0 flex border-b border-[#3d445110]"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
              value="tab1"
            >
              View Data
            </Tabs.Trigger>
            <Tabs.Trigger
              className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none cursor-pointer focus:outline-none"
              value="tab2"
            >
              AI Actions
            </Tabs.Trigger>
            <Tabs.Trigger
              className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
              value="tab3"
            >
              Contribute
            </Tabs.Trigger>
            <Tabs.Trigger
              className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
              value="tab4"
            >
              Stats
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none"
            value="tab1"
          >
            <div> View Data</div>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
          >
            <div> AI Actions</div>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none"
            value="tab3"
          >
            <div>Contribute</div>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab4"
          >
            <div> Stats </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default DataSetPage;
