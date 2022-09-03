import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const inputsContext = createContext({});

const InputsContext = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreviewURL, setImagePreviewURL] = useState("");
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
    setTitle("");
    setDescription("");
    setPrice("");
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
      title: title,
      description: description,
      price: price,
      category: category,
      sizes: sizeList,
      colors: colorList,
      availability: document.getElementById("availability").checked,
      imageName: file.name,
    };
  };

  return (
    <inputsContext.Provider
      value={{
        title,
        setTitle,
        description,
        setDescription,
        price,
        setPrice,
        category,
        setCategory,
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
