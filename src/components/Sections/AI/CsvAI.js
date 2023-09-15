import React from "react";
import AICard from "../../Cards/AICard";

const CsvAI = () => {
  const cardData = [
    {
      title: "Generate Visualisation",
      image: "/ai-icons/csv-visualization.svg",
      description: "Generate charts and graphs.",
      id: "csv-visualization",
    },
    {
      title: "Get data story",
      image: "/ai-icons/csv-story.svg",
      description: "Get relevant data stories from the files.",
      id: "csv-story",
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

export default CsvAI;
