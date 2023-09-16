import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeCard from "../Cards/CodeCard";
import code from "../../data/code";

const Code = () => {
  const [selectedLang, setSelectedLang] = useState("js");
  const [selectedCategory, setSelectedCategory] = useState("file-summary"); // default to file-summary
  const categoryData = code.find((item) => item.id === selectedCategory);
  const desiredCode = categoryData[selectedLang];

  return (
    <div className="flex flex-row gap-[50px] mt-[20px]">
      <div className="flex flex-col gap-[20px] w-[404px]">
        <CodeCard
          title="File Summary"
          image="/ai-icons/file-summary.svg"
          onClick={() => setSelectedCategory("file-summary")}
        />
        <CodeCard
          title="File Chat"
          image="/ai-icons/file-chat.svg"
          onClick={() => setSelectedCategory("file-chat")}
        />
        <CodeCard
          title="Generate Content"
          image="/ai-icons/generate-content.svg"
          onClick={() => setSelectedCategory("generate-content")}
        />
        <CodeCard
          title="CSV story"
          image="/ai-icons/csv-story.svg"
          onClick={() => setSelectedCategory("csv-story")}
        />
      </div>
      <div className="flex flex-col w-[606px]">
        <div className="flex flex-row gap-[20px] mb-[20px]">
          <button
            className="btn btn-outline btn-primary w-[130px]"
            onClick={() => setSelectedLang("js")}
          >
            <i className="fa-brands fa-js fa-lg"></i>
            Javscript
          </button>
          <button
            className="btn btn-outline btn-primary w-[130px]"
            onClick={() => setSelectedLang("python")}
          >
            <i className="fa-brands fa-python fa-lg"></i>
            Python
          </button>
          <button
            className="btn btn-outline btn-primary w-[130px]"
            onClick={() => setSelectedLang("bash")}
          >
            <i className="fa-solid fa-terminal fa-lg"></i>
            Bash
          </button>
          <button
            className="btn btn-outline btn-primary w-[130px]"
            onClick={() => setSelectedLang("go")}
          >
            <i className="fa-brands fa-golang fa-lg"></i>
            Go
          </button>
        </div>
        <CopyBlock
          text={desiredCode}
          language={selectedLang}
          showLineNumbers={true}
          theme={dracula}
          wrapLongLines={true}
        />
      </div>
    </div>
  );
};

export default Code;
