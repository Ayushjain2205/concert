import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const FileViewer = dynamic(
  () => import("react-file-viewer"),
  { ssr: false } // This will load the component only on the client side.
);

const ViewFile = () => {
  const [isClient, setIsClient] = useState(false); // New state variable

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted
  }, []);
  const file =
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png";
  const type = "png";
  return (
    <div className="tooltip" data-tip="View File">
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <i className="fa-solid fa-eye fa-lg"></i>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">File</h3>
          {isClient && (
            <FileViewer
              fileType={type}
              filePath={file}
              onError={(error) => console.log(error)}
            />
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ViewFile;
