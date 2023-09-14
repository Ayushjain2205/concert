import React from "react";
import FileViewer from "react-file-viewer";

const ViewFile = () => {
  const file =
    "https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png";
  const type = "png";
  return (
    <div>
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        View
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">File</h3>
          <FileViewer
            fileType={type}
            filePath={file}
            onError={(error) => console.log(error)}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ViewFile;
