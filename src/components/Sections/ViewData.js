import React, { useState } from "react";

const ViewData = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      filename: "name.pdf",
      contributor: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
      size: "108KB",
    },
    {
      filename: "name.pdf",
      contributor: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
      size: "108KB",
    },
    {
      filename: "name.pdf",
      contributor: "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0",
      size: "108KB",
    },
  ];

  const toggleRowSelection = (index) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      const idx = newSelectedRows.indexOf(index);
      newSelectedRows.splice(idx, 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);

    // Check if all rows are selected to update selectAll state
    if (newSelectedRows.length === data.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                  />
                </label>
              </th>
              <th>File Name</th>
              <th>Contributor</th>
              <th></th>
              <th>
                {selectAll && (
                  <button className="btn btn-ghost btn-xs">Download </button>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((file, index) => (
              <tr
                key={index}
                className={selectedRows.includes(index) ? "bg-[#B8B8FF50]" : ""}
              >
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleRowSelection(index)}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`/file-icons/file-icon-${(index % 10) + 1}.svg`}
                          alt={`File icon for ${file.filename}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{file.filename}</div>
                      <div className="text-sm opacity-50">{file.size}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {file.contributor}
                  </span>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">View</button>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Download</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewData;
