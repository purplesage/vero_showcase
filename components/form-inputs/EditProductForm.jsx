import React from "react";
import styles from "../../styles/form-styles/editProductForm.module.css";

import ProductForm from "./ProductForm";

const EditProductForm = ({ imageURL }) => {
  const editProduct = () => {};

  return (
    <tr className={styles.container}>
      <ProductForm
        productAction={editProduct}
        imageURL={imageURL}
        clsname="edit"
      />
    </tr>
  );
};

export default EditProductForm;
