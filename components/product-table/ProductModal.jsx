import React from "react";
import ReactDOM from "react-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import useProductInputStore from "../../store/inputStore";
import styles from "../../styles/product-table/productModal.module.css";

const ProductModal = ({ productObject }) => {
  const queryClient = useQueryClient();
  const { title, description, price, category } = productObject;

  const updateProductList = async (updatedList) => {
    const docRef = doc(dataBase, `db/products`);
    await updateDoc(docRef, { shoeList: updatedList });
  };

  const deleteProduct = async (deleteId) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
    await updateProductList(shoeList);
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
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>,
    document.getElementById("productPortal")
  );
};

export default ProductModal;
