import React, { createContext, useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { dataBase, storage } from "../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";

export const dashBoardContext = createContext({});

const DashboardContext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const [productList, setProductList] = useState([]);

  const addProduct = (productObject, e) => {
    e.preventDefault();
    setProductList([...productList, productObject]);
  };

  const deleteProduct = (deleteId) => {
    setProductList(
      productList.filter((productObject) => productObject.id !== deleteId)
    );
  };

  const deleteFileFromStorage = async (fileName) => {
    const file_ref = ref(storage, `images/${fileName}`);

    await deleteObject(file_ref);
  };
  const editProduct = (id, editProductObject) => {
    setProductList(
      productList.map((productObject) =>
        productObject.id === id
          ? { id: productObject.id, ...editProductObject }
          : productObject
      )
    );
  };

  const handleProductListFetch = (list) => {
    setProductList([...list]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const ref = doc(dataBase, `db/products`);
        const document = await getDoc(ref);
        const productList = document.data().productList;
        handleProductListFetch(productList);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const updateProductList = async () => {
      const docRef = doc(dataBase, `db/products`);
      await updateDoc(docRef, { productList }).then();
    };

    if (!isLoading) updateProductList();
  }, [productList]);

  return (
    <dashBoardContext.Provider
      value={{
        addProduct,
        productList,
        deleteProduct,
        editProduct,
        deleteFileFromStorage,
      }}
    >
      {children}
    </dashBoardContext.Provider>
  );
};

export default DashboardContext;
