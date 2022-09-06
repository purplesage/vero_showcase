import React, { useState, useContext } from "react";

import Image from "next/image";
import { TableCell, TableRow } from "@mui/material";
import { inputsContext } from "../context/InputsContext";
import { v4 as uuid } from "uuid";
import { dashBoardContext } from "../context/DashboardContext";
import SizeList from "./SizeList";
import ColorList from "./ColorList";

const PreviewModal = ({
  title,
  imageURL,
  description,
  sizes,
  colors,
  availability,
  price,
  category,
  id,
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
    backgroundColor: "hotpink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const {
    titleInput,
    setTitleInput,
    descriptionInput,
    setDescriptionInput,
    priceInput,
    setPriceInput,
    setCategoryInput,
    availabilityInput,
    setAvailabilityInput,
    productObject,
    imageName,
    setImageName,
    uploadImage,
  } = useContext(inputsContext);

  const handleImageEdit = (imageFile) => {
    if (imageFile.name !== imageName) return;
    uploadImage(imageFile);
  };

  const { editProduct } = useContext(dashBoardContext);

  const [previewMode, setPreviewMode] = useState(true);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {previewMode && (
        <TableRow>
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
        </TableRow>
      )}

      {editMode && (
        <TableRow>
          <TableCell style={style}>
            <button
              onClick={() => {
                setPreviewMode(true);
                setEditMode(false);
              }}
            >
              volver
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editProduct(id, productObject());
                handleImageEdit(e.target.editImage.files[0]);
              }}
            >
              <label htmlFor="edit-title">
                Título:
                <input
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  type="text"
                  name="edit-title"
                  id="edit-title"
                  placeholder={`Título: ${title}`}
                />
              </label>

              {/* todo: handle image edit */}
              {imageURL && (
                <div>
                  <Image
                    src={imageURL}
                    alt="product image"
                    layout="fixed"
                    width="100"
                    height="100"
                  />

                  <input
                    required
                    type="file"
                    name="editImage"
                    id="editImage"
                    onChange={(e) => setImageName(e.target.files[0].name)}
                  />
                </div>
              )}

              <label htmlFor="edit-description">
                Descripción:
                <input
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  type="text"
                  name="edit-description"
                  id="edit-description"
                  placeholder={`Descripción: ${description}`}
                />
              </label>

              <label htmlFor="categoria">
                Categoria:
                <input
                  placeholder={category}
                  list="shoeType"
                  name="categoria"
                  id="categoria"
                  onChange={(e) => setCategoryInput(e.target.value)}
                />
                <datalist id="shoeType">
                  <option value="Botas"></option>
                  <option value="Zapatillas"></option>
                  <option value="Tacones"></option>
                  <option value="Plataformas"></option>
                  <option value="Botas de agua"></option>
                  <option value="Abarca | Albarca"></option>
                  <option value="Botines"></option>
                  <option value="Mocasín"></option>
                  <option value="Nauticos"></option>
                  <option value="Zueco"></option>
                  <option value="Alpargata"></option>
                  <option value="Babucha"></option>
                  <option value="Bailarina"></option>
                  <option value="Botas de seguridad"></option>
                  <option value="Chancla"></option>
                  <option value="Chancleta"></option>
                  <option value="Huarache"></option>
                  <option value="Manoletinas"></option>
                </datalist>
              </label>

              <label htmlFor="edit-price">
                Precio:
                <input
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                  type="number"
                  name="edit-price"
                  id="edit-price"
                  placeholder={price}
                />
              </label>

              <label htmlFor="edit-sizes">
                Tallas:
                <input type="text" name="edit-sizes" id="edit-sizes" />
                <div style={{ display: "flex" }}>
                  <SizeList edit={true} />
                </div>
              </label>

              <label htmlFor="edit-colors">
                Colores:
                <input type="color" name="edit-colors" id="edit-colors" />
                <div style={{ display: "flex" }}>
                  <ColorList edit={true} />
                </div>
              </label>

              <label htmlFor="edit-availability">
                Disponibilidad:
                <input
                  onChange={() => setAvailabilityInput(!availabilityInput)}
                  type="checkbox"
                  checked={availabilityInput}
                  name="edit-availability"
                  id="edit-availability"
                />
              </label>
              <button type="submit">editar</button>
            </form>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default PreviewModal;
