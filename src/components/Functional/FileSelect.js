import React, { useState } from "react";

const FileSelect = () => {
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));

  const handleToggle = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
  };

  const countSelectedItems = () => {
    return selectedItems.filter(Boolean).length;
  };

  return (
    <div className="w-full">
      <details className="dropdown group w-full">
        <summary className="flex flex-row justify-between items-center m-1 w-full card ring ring-indigo-50 rounded-xl p-4 cursor-pointer">
          {`${countSelectedItems()} files selected`}
          <span className="transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>
        <ul className="p-4 shadow dropdown-content z-[1] bg-base-100 rounded-box w-full h-[200px] overflow-scroll">
          {selectedItems.map((isSelected, index) => (
            <li className="flex w-[400px]" key={index}>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    className="checkbox checkbox-primary mr-[10px]"
                    onChange={() => handleToggle(index)}
                  />
                  <span className="label-text">File {index + 1}</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default FileSelect;
