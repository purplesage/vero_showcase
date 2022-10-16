import React, { createContext, useState } from "react";
import { storage } from "../firebaseConfig";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

export const inputsContext = createContext({});

const InputsContext = ({ children }) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [availabilityInput, setAvailabilityInput] = useState(false);
  const [imagePreviewURL, setImagePreviewURL] = useState("");
  const [imageName, setImageName] = useState("");
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState({});

  const [isUploading, setIsUploading] = useState(false);

  const addSize = (newSize) => {
    setSizeList([...sizeList, newSize]);
  };

  const deleteSize = (value) => {
    setSizeList(sizeList.filter((size) => size !== value));
  };

  const sizeValue = (edit) => {
    if (!edit) return document.getElementById("sizes");

    return document.getElementById("edit-sizes");
  };

  const addColor = (newColor) => {
    setColorList([...colorList, newColor]);
  };

  const deleteColor = (value) => {
    setColorList(colorList.filter((color) => color !== value));
  };

  const colorValue = (edit) => {
    if (!edit) return document.getElementById("colors");

    return document.getElementById("edit-colors");
  };

  const inputReset = () => {
    setTitleInput("");
    setDescriptionInput("");
    setPriceInput("");
    setColorList([]);
    setSizeList([]);
    setAvailabilityInput(false);
    setImageName("");
  };

  const imageUrl = (file) => {
    return URL.createObjectURL(file);
  };

  const fetchImage = async (fileName, setProductImageUrl = null) => {
    if (setProductImageUrl) setProductImageUrl(url);

    const fileRef = ref(storage, `images/${fileName}`);
    const url = await getDownloadURL(fileRef);
    return url;
  };

  const uploadImage = async (imageFile) => {
    try {
      setIsUploading(true);
      const fileRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytesResumable(fileRef, imageFile).then(
        setIsUploading(false)
      );
    } catch (err) {
      console.warn(err.message);
    }
  };

  const productObject = (imgurl) => {
    return {
      id: uuid(),
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      category: categoryInput,
      sizes: sizeList,
      colors: colorList,
      availability: availabilityInput,
      imageURL: imgurl,
      imageName: imageName,
    };
  };

  const handleProductCreation = async (addProduct, imageFile, e) => {
    e.preventDefault();
    await uploadImage(imageFile);
    const image = await fetchImage(imageFile.name);
    addProduct(productObject(image));
  };

  const handleProductEdit = async (
    editProductFunction,
    newProductObject,
    imageFile = null,
    deleteFileFunction,
    prevImageRef,
    productID
  ) => {
    if (imageFile) {
      await uploadImage(imageFile);
      await fetchImage(imageName);
      editProductFunction(productID, newProductObject);
      deleteFileFunction(prevImageRef);
    } else {
      editProductFunction(productID, newProductObject);
    }
  };

  return (
    <inputsContext.Provider
      value={{
        titleInput,
        setTitleInput,
        descriptionInput,
        setDescriptionInput,
        priceInput,
        setPriceInput,
        categoryInput,
        setCategoryInput,
        imagePreviewURL,
        setImagePreviewURL,
        sizeList,
        setSizeList,
        colorList,
        setColorList,
        addSize,
        sizeValue,
        addColor,
        colorValue,
        inputReset,
        imageUrl,
        productObject,
        imageName,
        setImageName,
        availabilityInput,
        setAvailabilityInput,
        deleteSize,
        deleteColor,
        uploadImage,
        fetchImage,
        imageUrl,
        handleProductCreation,
        setImageURL,
        handleProductEdit,
        imageFile,
        setImageFile,
      }}
    >
      {children}
    </inputsContext.Provider>
  );
};

export default InputsContext;
