import React from "react";

const AICard = () => {
  return (
    <div className="flex flex-row rounded-xl bg-white p-4 ring ring-indigo-50 h-[200px] w-[500px] cursor-pointer hover:bg-[#B8B8FF30]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-row items-center gap-[20px]">
          <img src="/ai-icons/file-chat.svg" className="h-[75px]" alt="" />
          <p className="text-[36px]">PDF summary</p>
        </div>
        <p className="opacity-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eum repudiandae voluptatibus quidem numquam,
        </p>
      </div>
    </div>
  );
};

export default AICard;
