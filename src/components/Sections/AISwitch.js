import React from "react";
import PdfAI from "./AI/PdfAI";
import ImageAI from "./AI/ImageAI";
import CsvAI from "./AI/CsvAI";

const AISwitch = ({ type }) => {
  switch (type) {
    case "pdf":
      return <PdfAI />;
    case "image":
      return <ImageAI />;
    case "csv":
      return <CsvAI />;
    default:
      return <PdfAI />;
  }
};

export default AISwitch;
