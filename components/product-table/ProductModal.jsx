import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import useProductInputStore from "../../store/inputStore";
import styles from "../../styles/product-table/productModal.module.css";
import { fetchShoeList } from "../../lib/util";
import PreviewCard from "./PreviewCard";
import ProductForm from "../form-inputs/ProductForm";

const ProductModal = ({ productObject, handleCloseModal }) => {
  const queryClient = useQueryClient();
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const { data } = useQuery(["shoeList"], fetchShoeList);

  const updateProductList = async (updatedList) => {
    const docRef = doc(dataBase, `db/products`);
    await updateDoc(docRef, { shoeList: updatedList });
  };

  const deleteProduct = async (deleteId) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
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

  const setInputValuesForEditing = useProductInputStore(
    (state) => state.setInputValuesForEditing
  );

  return ReactDOM.createPortal(
    <div className={styles.darkBackdrop}>
      <div className={styles.container}>
        {!editMode ? (
          <PreviewCard
            productObject={productObject}
            handleCloseModal={handleCloseModal}
            productDeletionMutation={productDeletionMutation}
            handleEditMode={handleEditMode}
          />
        ) : (
          <>
            <button onClick={handleEditMode}>Volver</button>
            <ProductForm isEdit />
          </>
        )}
      </div>
    </div>,
    document.getElementById("productPortal")
  );
};

export default ProductModal;
