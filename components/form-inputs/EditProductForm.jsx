import React from "react";
import styles from "../../styles/form-styles/editProductForm.module.css";
import Image from "next/image";

import ProductForm from "./ProductForm";

const EditProductForm = ({ imageURL }) => {
  const editProduct = () => {};
  return (
    <div className={styles.container}>
      <Image src={imageURL} alt="product image" width="100" height="100" />
      <ProductForm productAction={editProduct} />
    </div>
  );
};

export default EditProductForm;
