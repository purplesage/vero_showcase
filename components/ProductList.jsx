import React, { useContext } from "react";
import { dashBoardContext } from "../context/DashboardContext";
import { storage } from "../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";

const ProductList = ({ showAs }) => {
  const { productList, deleteProduct } = useContext(dashBoardContext);

  const deleteFileFromStorage = async (fileName) => {
    const file_ref = ref(storage, `images/${fileName}`);

    await deleteObject(file_ref);
  };

  if (showAs === "edit") {
    return (
      <>
        {productList.length > 0 &&
          productList.map((productObject) => (
            <div key={productObject.id}>
              <button
                type="button"
                onClick={() => {
                  deleteProduct(productObject.id);
                  deleteFileFromStorage(productObject.imageName);
                }}
              >
                Borrar Producto
              </button>
              <h3>{productObject.title}</h3>
              <p>{productObject.description}</p>
              <p>{productObject.price}</p>
              <p>{productObject.imageName}</p>
            </div>
          ))}
      </>
    );
  } else if (showAs === "default") {
    return (
      <>
        {productList.length > 0 &&
          productList.map((productObject) => (
            <div key={productObject.id}>
              <h3>{productObject.title}</h3>
              <p>{productObject.description}</p>
              <p>{productObject.price}</p>
            </div>
          ))}
      </>
    );
  }
};

export default ProductList;
