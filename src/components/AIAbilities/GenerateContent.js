import React from "react";
import Loader from "../UI/Loader";
import FileSelect from "../Functional/FileSelect";

const GenerateContent = () => {
  return (
    <div className="h-[500px]">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-[16px]">Select files</span>
        </label>
        <FileSelect />
      </div>
    </div>
  );
};

export default GenerateContent;
