import React from "react";

const AICard = ({ title, image, description, id }) => {
  return (
    <div className="flex flex-row rounded-xl bg-white p-4 ring ring-indigo-50 h-[200px] w-[500px] cursor-pointer hover:bg-[#B8B8FF30]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-row items-center gap-[20px]">
          <img src={image} className="h-[75px]" alt={title} />
          <p className="text-[36px]">{title}</p>
        </div>
        <p className="opacity-50">{description}</p>
      </div>
    </div>
  );
};

export default AICard;
