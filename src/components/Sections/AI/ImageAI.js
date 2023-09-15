import React from "react";
import AICard from "../../Cards/AICard";

const ImageAI = () => {
  const cardData = [
    {
      title: "Generate Similar Image",
      image: "/ai-icons/image-similar.svg",
      description: "Generate an image similar to the ones in the dataset.",
      id: "image-similar",
    },
    {
      title: "Generate Fusion Image",
      image: "/ai-icons/image-fusion.svg",
      description: "Generate an image combining two images.",
      id: "image-fusion",
    },
    {
      title: "Generate with prompt",
      image: "/ai-icons/image-prompt.svg",
      description: "Generate an image by giving a custom prompt.",
      id: "image-prompt",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-[40px] my-[20px]">
      {cardData.map((card) => (
        <AICard
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default ImageAI;
