import React, { useContext, useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import { dashBoardContext } from "../context/DashboardContext";
import { inputsContext } from "../context/InputsContext";
import PreviewModal from "./PreviewModal";

const ProductRow = ({
  id,
  title,
  description,
  price,
  category,
  colors,
  sizes,
  availability,
  imageName,
  imageURL,
}) => {
  const {
    setTitleInput,
    setDescriptionInput,
    setPriceInput,
    setCategoryInput,
    setSizeList,
    setColorList,
    setAvailabilityInput,
    setImageName,
    setImagePreviewURL,
    fetchImage,
    imageUrl,
  } = useContext(inputsContext);

  const setInputState = () => {
    setTitleInput(title);
    setDescriptionInput(description);
    setPriceInput(price);
    setCategoryInput(category);
    setSizeList(sizes);
    setColorList(colors);
    setAvailabilityInput(availability);
    setImageName(imageName);
    setImagePreviewURL("");
  };

  const [openModal, setOpenModal] = useState(false);

  const { deleteProduct, deleteFileFromStorage } = useContext(dashBoardContext);

  return (
    <>
      {openModal && (
        <PreviewModal
          title={title}
          imageURL={imageURL}
          description={description}
          sizes={sizes}
          colors={colors}
          availability={availability}
          price={price}
          category={category}
          id={id}
        />
      )}
      <TableRow>
        <TableCell>
          <button
            onClick={() => {
              setOpenModal(!openModal);
              fetchImage(imageName);
              setInputState();
            }}
          >
            preview
          </button>
          <button
            type="button"
            onClick={() => {
              deleteProduct(id);
              deleteFileFromStorage(imageName);
            }}
          >
            delete
          </button>
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>{category}</TableCell>
        <TableCell>{colors}</TableCell>
        <TableCell>{sizes}</TableCell>
        <TableCell>{availability === true ? "yes" : "nope"}</TableCell>
      </TableRow>
    </>
  );
};

export default ProductRow;
