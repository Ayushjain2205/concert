import React from "react";
import AICard from "../../Cards/AICard";

const PdfAI = () => {
  const cardData = [
    {
      title: "File summary",
      image: "/ai-icons/file-summary.svg",
      description: "Get the summary of a PDF file.",
      id: "file-summary",
    },
    {
      title: "Chat with file",
      image: "/ai-icons/file-chat.svg",
      description:
        "Chat with a PDF file, ask questions get contextual relevant answers.",
      id: "file-chat",
    },
    {
      title: "Generate content",
      image: "/ai-icons/generate-content.svg",
      description: "Generate content based on a file.",
      id: "generate-content",
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

export default PdfAI;
