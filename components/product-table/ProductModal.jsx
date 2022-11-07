import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { updateDoc, doc } from "firebase/firestore";
import { dataBase, storage } from "../../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import useProductInputStore from "../../store/inputStore";
import styles from "../../styles/product-table/productModal.module.css";
import { fetchShoeList, fetchImage, uploadImage } from "../../lib/util";
import PreviewCard from "./PreviewCard";
import ProductForm from "../form-inputs/ProductForm";

const ProductModal = ({ productObject, handleCloseModal }) => {
  const queryClient = useQueryClient();
  const [isEditMode, setIsEditMode] = useState(false);

  const setImageURL = useProductInputStore((state) => state.setImageURL);

  const newProduct = useProductInputStore((state) => state.productFactory);

  const setInputValuesForEditing = useProductInputStore(
    (state) => state.setInputValuesForEditing
  );

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

  const deleteProduct = async (deleteId, fileName) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
    await deleteFileFromStorage(fileName);
    await updateProductList(shoeList);
    handleCloseModal();
  };

  const productDeletionMutation = useMutation(
    (deleteId) => deleteProduct(deleteId, productObject.fileName),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shoeList"]);
      },
    }
  );

  const editProduct = async (id) => {
    const editedList = data.map((productObject) =>
      productObject.id === id
        ? { id: productObject.id, ...newProduct() }
        : productObject
    );
    await updateProductList(editedList);
    handleCloseModal();
  };

  const editProductInFirebase = async (id, imageFile) => {
    if (imageFile) {
      await deleteFileFromStorage(productObject.fileName);
      await uploadImage(imageFile);
      const fireBaseImageURL = await fetchImage(imageFile.name);
      const imageKitURL = fireBaseImageURL.replace(
        "https://firebasestorage.googleapis.com",
        "https://ik.imagekit.io/purplesage"
      );
      setImageURL(imageKitURL);
      await editProduct(id);
    } else {
      await editProduct(id);
    }
  };

  const handleProductEdition = useMutation(
    ({ id, imageFile }) => editProductInFirebase(id, imageFile),
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
              productAction={handleProductEdition}
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
