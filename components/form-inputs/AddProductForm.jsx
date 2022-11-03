import React from "react";

import axios from "axios";

//zustand store
import useProductInputStore from "../../store/inputStore";

//react query functions
import { useQueryClient, useMutation } from "@tanstack/react-query";

//input components
import ProductForm from "./ProductForm";

//utility functions
import { useInputs } from "../../lib/util";

//firebase related functions
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { dataBase, storage } from "../../firebaseConfig";

const AddProductForm = () => {
  const queryClient = useQueryClient();

  const { newProduct, setImageURL } = useInputs(useProductInputStore);

  const addProductToFirebase = async () => {
    const product = newProduct();
    await updateDoc(doc(dataBase, "db/products"), {
      shoeList: arrayUnion(product),
    });
  };

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

  const handleProductCreation = async (imageFile) => {
    await uploadImage(imageFile);
    const imageURL = await fetchImage(imageFile.name);
    setImageURL(imageURL);
    addProductToFirebase();
  };

  const addProduct = useMutation(
    (imageFile) => handleProductCreation(imageFile),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["shoeList"]);
      },
    }
  );

  return <ProductForm productAction={addProduct} />;
};

export default AddProductForm;
