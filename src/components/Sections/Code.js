import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeCard from "../Cards/CodeCard";

const Code = () => {
  const code = `
  print("Hello World")
  print("Hello World")
  print("Hello World")
  `;
  return (
    <div className="flex flex-row gap-[50px]">
      <div className="flex flex-col w-2/5">
        <CodeCard />
      </div>
      <div className="flex flex-col w-3/5">
        <CopyBlock text={code} language="python" theme={dracula} />
      </div>
    </div>
  );
};

export default Code;
