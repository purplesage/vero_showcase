import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { updateDoc, doc } from "firebase/firestore";
import { dataBase, storage } from "../../firebaseConfig";
import {
  ref,
  deleteObject,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import useProductInputStore from "../../store/inputStore";
import styles from "../../styles/product-table/productModal.module.css";
import { fetchShoeList } from "../../lib/util";
import PreviewCard from "./PreviewCard";
import ProductForm from "../form-inputs/ProductForm";

const ProductModal = ({ productObject, handleCloseModal }) => {
  const queryClient = useQueryClient();
  const [isEditMode, setIsEditMode] = useState(false);

  const setImageURL = useProductInputStore((state) => state.setImageURL);

  const setInputValuesForEditing = useProductInputStore(
    (state) => state.setInputValuesForEditing
  );
  const newProduct = useProductInputStore((state) => state.productFactory);

  const handleShowEditMode = () => {
    setIsEditMode((prev) => !prev);
    setInputValuesForEditing(productObject);
  };

  const { data } = useQuery(["shoeList"], fetchShoeList);

  const updateProductList = async (updatedList) => {
    const docRef = doc(dataBase, `db/products`);
    await updateDoc(docRef, { shoeList: updatedList });
  };

  const deleteFileFromStorage = async (fileName) => {
    const file_ref = ref(storage, `images/${fileName}`);

    await deleteObject(file_ref);
  };

  const deleteProduct = async (deleteId) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
    await deleteFileFromStorage(productObject.fileName);
    await updateProductList(shoeList);
    handleCloseModal();
  };

  const productDeletionMutation = useMutation(
    (deleteId) => deleteProduct(deleteId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shoeList"]);
      },
    }
  );

  const uploadImage = async (imageFile) => {
    try {
      const fileRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytesResumable(fileRef, imageFile);
    } catch (err) {
      console.warn(err.message);
    }
  };

  const fetchImage = async (fileName) => {
    const fileRef = ref(storage, `images/${fileName}`);
    const url = await getDownloadURL(fileRef);
    return url;
  };

  const editProduct = async (id) => {
    const editedList = data.map((productObject) =>
      productObject.id === id
        ? { id: productObject.id, ...newProduct() }
        : productObject
    );
    await updateProductList(editedList);
    handleCloseModal();
  };

  const handleProductEdition = async (imageFile) => {
    if (imageFile) {
      await deleteFileFromStorage(productObject.fileName);
      await uploadImage(imageFile);
      const imageURL = await fetchImage(imageFile.name);
      setImageURL(imageURL);
      await editProduct(productObject.id);
      console.log("this fired 1", imageFile);
    } else {
      console.log("this fired 2", imageFile);
      await editProduct(productObject.id);
    }
  };

  const productEditionMutation = useMutation(
    (imageFile) => handleProductEdition(imageFile),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shoeList"]);
      },
    }
  );

  return ReactDOM.createPortal(
    <div className={styles.darkBackdrop}>
      <div className={styles.container}>
        {!isEditMode ? (
          <PreviewCard
            productObject={productObject}
            handleCloseModal={handleCloseModal}
            productDeletionMutation={productDeletionMutation}
            handleShowEditMode={handleShowEditMode}
          />
        ) : (
          <>
            <button onClick={handleShowEditMode}>Volver</button>
            <ProductForm
              productId={productObject.id}
              productAction={productEditionMutation}
              isEdit
            />
          </>
        )}
      </div>
    </div>,
    document.getElementById("productPortal")
  );
};

export default ProductModal;
