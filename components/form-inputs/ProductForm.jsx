import React from "react";
import useProductInputStore from "../../store/inputStore";

import TitleInput from "./TitleInput";
import DescriptionInput from "./DescriptionInput";
import PriceInput from "./PriceInput";
import CategoryInput from "./CategoryInput";
import AvailabilityInput from "./AvailabilityInput";
import SizeInput from "./SizeInput";
import ColorInput from "./ColorInput";
import ImageInput from "./ImageInput";

import { useInputs } from "../../lib/util";

import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { dataBase, storage } from "../../firebaseConfig";

const ProductForm = () => {
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

export default ProductForm;
