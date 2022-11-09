import React from "react";

//zustand store
import useProductInputStore from "../../store/inputStore";

//react query functions
import { useQueryClient, useMutation } from "@tanstack/react-query";

//input components
import ProductForm from "./ProductForm";

//utility functions
import { useInputs, fetchImage, uploadImage } from "../../lib/util";

//firebase related functions
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";

import { TailSpin } from "react-loader-spinner";

const AddProductForm = () => {
  const queryClient = useQueryClient();

  const { newProduct, setImageURL } = useInputs(useProductInputStore);

  const addProductToFirebase = async () => {
    const product = newProduct();
    await updateDoc(doc(dataBase, "db/products"), {
      shoeList: arrayUnion(product),
    });
  };

  const handleProductCreation = async (imageFile) => {
    await uploadImage(imageFile);
    const fireBaseImageURL = await fetchImage(imageFile.name);
    const imageKitURL = fireBaseImageURL.replace(
      "https://firebasestorage.googleapis.com",
      "https://ik.imagekit.io/purplesage"
    );
    setImageURL(imageKitURL);
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

  if (addProduct.isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    );

  return <ProductForm productAction={addProduct} />;
};

export default AddProductForm;
