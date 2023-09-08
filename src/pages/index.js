import React from "react";

// // pages/upload.js
// export default function UploadPage() {
//   const [fileDetails, setFileDetails] = React.useState(null);

//   const onUpload = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("file", event.target.file.files[0]);

//     const response = await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     setFileDetails(data);
//   };

//   return (
//     <div>
//       <form onSubmit={onUpload}>
//         <input type="file" name="file" accept=".png" />
//         <button type="submit">Upload</button>
//       </form>

//       {fileDetails && (
//         <div>
//           <h2>File Details:</h2>
//           <p>
//             <strong>Name:</strong> {fileDetails.originalname}
//           </p>
//           <p>
//             <strong>Type:</strong> {fileDetails.mimetype}
//           </p>
//           <p>
//             <strong>Size:</strong> {fileDetails.size} bytes
//           </p>
//           <p>
//             <strong>Metadata (concert_did):</strong>{" "}
//             {fileDetails.metadata.concert_did}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// pages/upload.js
export default function UploadPage() {
  const [fileDetails, setFileDetails] = React.useState(null);

  const onUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", event.target.file.files[0]);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setFileDetails(data);
  };

  return (
    <div>
      <form onSubmit={onUpload}>
        <input type="file" name="file" accept=".png" />
        <button type="submit">Upload</button>
      </form>

      {fileDetails && (
        <div>
          <h2>File Details:</h2>
          <p>
            <strong>Name:</strong> {fileDetails.originalname}
          </p>
          <p>
            <strong>Type:</strong> {fileDetails.mimetype}
          </p>
          <p>
            <strong>Size:</strong> {fileDetails.size} bytes
          </p>
          <p>
            <strong>Metadata (concert_did):</strong>{" "}
            {fileDetails.metadata.concert_did}
          </p>

          <a
            href={`/api/upload?fileId=${fileDetails.fileId}`}
            download="updated.png"
          >
            <button>Download Updated File</button>
          </a>
        </div>
      )}
    </div>
  );
}
