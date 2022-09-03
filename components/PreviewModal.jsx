import React, { useState } from "react";

import Image from "next/image";
import { TableCell } from "@mui/material";

const PreviewModal = ({
  title,
  imageURL,
  description,
  sizes,
  colors,
  availability,
  price,
  category,
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

  const [previewMode, setPreviewMode] = useState(true);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {previewMode && (
        <TableCell style={style}>
          <button
            onClick={() => {
              setPreviewMode(false);
              setEditMode(true);
            }}
          >
            editar
          </button>
          <p>{title}</p>
          {imageURL && (
            <Image
              src={imageURL}
              alt="product image"
              layout="fixed"
              width="100"
              height="100"
            />
          )}
          <p>{description}</p>
          <p>{category}</p>
          <p>{price}</p>
          <p>{sizes}</p>
          <p>{colors}</p>
          <p>{availability ? "disponible" : "no disponible"}</p>
        </TableCell>
      )}

      {editMode && (
        <TableCell style={style}>
          <button
            onClick={() => {
              setPreviewMode(true);
              setEditMode(false);
            }}
          >
            salir
          </button>
          <input
            type="text"
            name="edit-title"
            id="edit-title"
            placeholder={`Título: ${title}`}
          />

          {/* todo: handle image edit */}
          {imageURL && (
            <Image
              src={imageURL}
              alt="product image"
              layout="fixed"
              width="100"
              height="100"
            />
          )}
          <input
            type="text"
            name="edit-description"
            id="edit-description"
            placeholder={`Descripción: ${description}`}
          />
          <p>{category}</p>

          <input
            type="text"
            name="edit-price"
            id="edit-price"
            placeholder={price}
          />

          <p>{sizes}</p>
          <p>{colors}</p>
          <p>{availability ? "disponible" : "no disponible"}</p>
        </TableCell>
      )}
    </>
  );
};

export default PreviewModal;
