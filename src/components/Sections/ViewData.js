import React, { useState } from "react";

const ViewData = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      avatar: "/file-icons/file-icon-1.svg",
      name: "Hart Hagerty",
      country: "United States",
      company: "Zemlak, Daniel and Leannon",
      job: "Desktop Support Technician",
      color: "Purple",
    },
    {
      avatar: "/file-icons/file-icon-2.svg",
      name: "Brice Swyre",
      country: "China",
      company: "Carroll Group",
      job: "Tax Accountant",
      color: "Red",
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
                  <button className="btn btn-ghost btn-xs">Download all</button>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
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
                          src={person.avatar}
                          alt={`File name - ${person.name}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{person.name}</div>
                      <div className="text-sm opacity-50">{person.country}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {person.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {person.job}
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
