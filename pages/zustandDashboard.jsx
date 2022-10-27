import React from "react";
import useProductInputStore from "../store/inputStore";
import Image from "next/image";

import TitleInput from "../components/form-inputs/TitleInput";
import DescriptionInput from "../components/form-inputs/DescriptionInput";
import PriceInput from "../components/form-inputs/PriceInput";
import CategoryInput from "../components/form-inputs/CategoryInput";
import AvailabilityInput from "../components/form-inputs/AvailabilityInput";
import SizeInput from "../components/form-inputs/SizeInput";
import ColorInput from "../components/form-inputs/ColorInput";
import ImageInput from "../components/form-inputs/ImageInput";

import { useInputs } from "../lib/util";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";

import { dataBase, storage } from "../firebaseConfig";
import { colorValue } from "../store/inputStore";
import { v4 as uuid } from "uuid";

const ZustandDashboard = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    category,
    setCategory,
    availability,
    setAvailability,
    imagePreviewURL,
    setImagePreviewURL,
    newProduct,
    sizeList,
    addSize,
    deleteSize,
    colorList,
    addColor,
    deleteColor,
    setImageURL,
  } = useInputs(useProductInputStore);

  const addProductToFirebase = async () => {
    await updateDoc(doc(dataBase, "db/products"), {
      productList: arrayUnion(newProduct()),
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

  const handleProductCreation = async (e, imageFile) => {
    e.preventDefault();
    await uploadImage(imageFile);
    const imageURL = await fetchImage(imageFile.name);
    setImageURL(imageURL);
    addProductToFirebase();
  };

  return (
    <form
      onSubmit={(e) => {
        handleProductCreation(e, e.target.imagen.files[0]);
      }}
    >
      <TitleInput title={title} setTitle={setTitle} />

      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />

      <PriceInput price={price} setPrice={setPrice} />

      <CategoryInput category={category} setCategory={setCategory} />

      <AvailabilityInput
        availability={availability}
        setAvailability={setAvailability}
      />

      <SizeInput
        sizeList={sizeList}
        addSize={addSize}
        deleteSize={deleteSize}
      />

      <ColorInput
        colorList={colorList}
        addColor={addColor}
        deleteColor={deleteColor}
      />

      <ImageInput
        imagePreviewURL={imagePreviewURL}
        setImagePreviewURL={setImagePreviewURL}
      />

      <button type="submit">send</button>
    </form>
  );
};

export default ZustandDashboard;
