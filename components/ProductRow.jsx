import React, { useContext, useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import { dashBoardContext } from "../context/DashboardContext";
import { ref, deleteObject, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
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
}) => {
  const {
    setTitleInput,
    setDescriptionInput,
    setPriceInput,
    setCategoryInput,
    setSizeList,
    setColorList,
  } = useContext(inputsContext);

  const setInputState = () => {
    setTitleInput(title);
    setDescriptionInput(description);
    setPriceInput(price);
    setCategoryInput(category);
    setSizeList(sizes);
    setColorList(colors);
  };

  const [openModal, setOpenModal] = useState(false);

  const { deleteProduct } = useContext(dashBoardContext);

  const deleteFileFromStorage = async (fileName) => {
    const file_ref = ref(storage, `images/${fileName}`);

    await deleteObject(file_ref);
  };

  const [imageURL, setImageURL] = useState("");

  const fetchImage = async (fileName) => {
    const fileRef = ref(storage, `images/${fileName}`);
    const url = await getDownloadURL(fileRef);
    setImageURL(url);
  };

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
