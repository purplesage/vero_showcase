import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";
import Image from "next/image";

const PreviewModal = ({
  title,
  imageURL,
  description,
  sizes,
  colors,
  availability,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "red",
  };

  return (
    <div style={style}>
      <p>{title}</p>
      <img
        src={imageURL}
        alt="product image"
        layout="fixed"
        width="100"
        height="100"
      />
      <p>{description}</p>
      <p>{sizes}</p>
      <p>{colors}</p>
      <p>{availability}</p>
    </div>
  );
};

export default PreviewModal;
