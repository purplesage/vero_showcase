import React, { createContext, useState } from "react";
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

  const addSize = (newSize) => {
    setSizeList([...sizeList, newSize]);
  };

  const deleteSize = (value) => {
    setSizeList(sizeList.filter((size) => size !== value));
  };

  const sizeValue = () => {
    return document.getElementById("sizes");
  };

  const addColor = (newColor) => {
    setColorList([...colorList, newColor]);
  };

  const deleteColor = (value) => {
    setColorList(colorList.filter((color) => color !== value));
  };

  const colorValue = () => {
    return document.getElementById("colors");
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

  const productObject = () => {
    //nuevo producto
    return {
      id: uuid(),
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      category: categoryInput,
      sizes: sizeList,
      colors: colorList,
      availability: availabilityInput,
      imageName: imageName,
      // imageName: file.name,
      /* availability: document.getElementById("availability").checked, */
    };
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
        setImageName,
        availabilityInput,
        setAvailabilityInput,
        deleteSize,
        deleteColor,
      }}
    >
      {children}
    </inputsContext.Provider>
  );
};

export default InputsContext;
