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
  const [isEditMode, setIsEditMode] = useState(false);

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

  const editProduct = async (id) => {
    const editedList = data.map((productObject) =>
      productObject.id === id
        ? { id: productObject.id, ...newProduct() }
        : productObject
    );
    await updateProductList(editedList);
    handleCloseModal();
  };

  const productEditionMutation = useMutation(
    (id, editProductObject) => editProduct(id),
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
