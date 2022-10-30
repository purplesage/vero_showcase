import React from "react";
import styles from "../../styles/form-styles/editProductForm.module.css";

import ProductForm from "./ProductForm";

const EditProductForm = ({ imageURL }) => {
  const editProduct = () => {};

  return (
    <div className={styles.container}>
      <ProductForm productAction={editProduct} imageURL={imageURL} />
    </div>
  );
};

export default EditProductForm;
