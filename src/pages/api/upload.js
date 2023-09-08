// // pages/api/upload.js
// import multer from "multer";
// import { PNG } from "pngjs";

// const storage = multer.memoryStorage(); // Store the file in memory
// const upload = multer({ storage: storage });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async (req, res) => {
//   if (req.method !== "POST") {
//     return res.status(405).end(); // Method Not Allowed if not POST
//   }

//   upload.single("file")(req, res, (err) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }

//     const png = PNG.sync.read(req.file.buffer);
//     const metadata = png.text || {};

//     // Here we add our custom metadata
//     metadata.concert_did = "didi";

//     const { originalname, mimetype, size } = req.file;

//     res.json({
//       originalname,
//       mimetype,
//       size,
//       metadata,
//     });
//   });
// };

// pages/api/upload.js
import multer from "multer";
import { PNG } from "pngjs";
import { v4 as uuidv4 } from "uuid";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB. Adjust as needed.
  },
});

const tempFiles = {}; // Temporary in-memory storage for updated PNGs

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === "POST") {
    // Handle file upload
    return upload.single("file")(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const png = PNG.sync.read(req.file.buffer);
      const metadata = png.text || {};

      // Add custom metadata
      metadata.concert_did = "your_unique_value_here";
      png.text = metadata;

      console.log(png);

      const updatedBuffer = PNG.sync.write(png);

      const fileId = uuidv4();
      tempFiles[fileId] = updatedBuffer;

      const { originalname, mimetype, size } = req.file;

      res.json({
        originalname,
        mimetype,
        size,
        metadata,
        fileId,
      });
    });
  } else if (req.method === "GET" && req.query.fileId) {
    // Handle file download
    const fileBuffer = tempFiles[req.query.fileId];

    if (!fileBuffer) {
      return res.status(404).send("File not found");
    }

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", `attachment; filename=updated.png`);
    res.end(fileBuffer);
  } else {
    res.status(405).end();
  }
};
