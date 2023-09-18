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
    <div className="">
      <details className="dropdown">
        <summary className="m-1 card ring ring-indigo-50 rounded-xl p-4 w-[400px] cursor-pointer">
          {`${countSelectedItems()} files selected`}
        </summary>
        <ul className="p-4 shadow dropdown-content z-[1] bg-base-100 rounded-box w-[400px] h-[200px] overflow-scroll">
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
