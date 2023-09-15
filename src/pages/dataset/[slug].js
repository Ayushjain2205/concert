import React from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import ViewData from "../../components/Sections/ViewData";
import PdfAI from "../../components/Sections/AI/PdfAI";
import Stats from "../../components/Sections/Stats";
import Contribute from "../../components/Sections/Contribute";
import Code from "../../components/Sections/Code";
import ImageAI from "../../components/Sections/AI/ImageAI";

const tabsConfig = [
  { value: "tab1", label: "View Data", content: <ViewData /> },
  { value: "tab2", label: "AI Actions", content: <ImageAI /> },
  { value: "tab3", label: "Contribute", content: <Contribute /> },
  { value: "tab4", label: "Code", content: <Code /> },
  { value: "tab5", label: "Stats", content: <Stats /> },
];

const TabTrigger = ({ value, label }) => (
  <Trigger
    className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
    value={value}
  >
    {label}
  </Trigger>
);

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
            <strong className="rounded-xl border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Category
            </strong>
          </div>
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
        <button className="btn btn-outline btn-primary rounded-xl">
          Buy with 50{" "}
          <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
        </button>
      </div>
      <div className="rounded-xl p-4 ring ring-indigo-50">
        <Root className="flex flex-col w-[1100px]" defaultValue="tab1">
          <List
            className="shrink-0 flex border-b border-[#3d445110]"
            aria-label="Manage your account"
          >
            {tabsConfig.map((tab) => (
              <TabTrigger key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </List>
          {tabsConfig.map((tab) => (
            <Content
              key={tab.value}
              className="grow p-5 bg-white rounded-b-md outline-none max-h-[750px] overflow-scroll"
              value={tab.value}
            >
              {tab.content}
            </Content>
          ))}
        </Root>
      </div>
    </div>
  );
};

export default DataSetPage;
