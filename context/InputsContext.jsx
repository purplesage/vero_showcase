import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const inputsContext = createContext({});

const InputsContext = ({ children }) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [imagePreviewURL, setImagePreviewURL] = useState("");
  const [imageName, setImageName] = useState("");
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);

  const addSize = (newSize) => {
    setSizeList([...sizeList, newSize]);
  };

  const sizeValue = () => {
    return document.getElementById("sizes");
  };

  const addColor = (newColor) => {
    setColorList([...colorList, newColor]);
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
  };

  const imageUrl = (file) => {
    return URL.createObjectURL(file);
  };

  const productObject = (file) => {
    //nuevo producto
    return {
      id: uuid(),
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      category: categoryInput,
      sizes: sizeList,
      colors: colorList,
      availability: document.getElementById("availability").checked,
      imageName: file.name,
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
      }}
    >
      {children}
    </inputsContext.Provider>
  );
};

export default InputsContext;
