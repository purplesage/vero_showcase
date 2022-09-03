import React, { useContext, useState } from "react";
import { dashBoardContext } from "../context/DashboardContext";
import { v4 as uuid } from "uuid";
import { uploadBytesResumable, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import styles from "../styles/admin_dashboard.module.css";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";

const ProductInputs = () => {
  const { addProduct, setIsUploading } = useContext(dashBoardContext);

  const {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    setCategory,
    imagePreviewURL,
    setImagePreviewURL,
    sizeList,
    colorList,
    addSize,
    sizeValue,
    addColor,
    colorValue,
    inputReset,
    imageUrl,
    productObject,
  } = useContext(inputsContext);

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

  return (
    <form
      id="product-form"
      className={styles.addProductForm}
      action="Agregar Producto"
      onSubmit={(e) => {
        addProduct(productObject(e.target.imagen.files[0]), e);
        uploadImage(e.target.imagen.files[0]);
        setImagePreviewURL("");
        inputReset();
        e.target.reset();
      }}
    >
      <label htmlFor="titulo">
        Titulo:
        <input
          required
          type="text"
          name="titulo"
          id="titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label htmlFor="descripcion">
        Descripcion:
        <input
          required
          type="text"
          name="descripcion"
          id="descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label htmlFor="precio">
        Precio:
        <input
          required
          type="text"
          name="precio"
          id="precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      {/* todo: handle caregory later. */}
      <label htmlFor="categoria">
        Categoria:
        <input
          required
          list="shoeType"
          name="categoria"
          id="categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <datalist id="shoeType">
          <option value="Botas"></option>
          <option value="Zapatillas"></option>
          <option value="Tacones"></option>
          <option value="Plataformas"></option>
          <option value="Botas de agua"></option>
          <option value="Abarca | Albarca"></option>
          <option value="Botines"></option>
          <option value="Mocasín"></option>
          <option value="Nauticos"></option>
          <option value="Zueco"></option>
          <option value="Alpargata"></option>
          <option value="Babucha"></option>
          <option value="Bailarina"></option>
          <option value="Botas de seguridad"></option>
          <option value="Chancla"></option>
          <option value="Chancleta"></option>
          <option value="Huarache"></option>
          <option value="Manoletinas"></option>
        </datalist>
      </label>

      <label htmlFor="sizes">
        Tallas:
        <input type="text" name="sizes" id="sizes" />
        <div style={{ display: "flex" }}>
          {" "}
          {/* abstract this style to css later */}
          {sizeList.length > 0 &&
            sizeList.map((size) => <p key={uuid()}>{size}</p>)}
        </div>
        <button
          type="button"
          onClick={() => {
            addSize(sizeValue().value);
            sizeValue().value = "";
          }}
        >
          agregar talla
        </button>
      </label>

      <label htmlFor="colors">
        Colores: <input type="color" name="colors" id="colors" />
        <div style={{ display: "flex" }}>
          {" "}
          {/* abstract this style to css later */}
          {colorList.length > 0 &&
            colorList.map((color) => (
              <p style={{ color: color }} key={uuid()}>
                {color}
              </p>
            ))}
        </div>
        <button type="button" onClick={() => addColor(colorValue().value)}>
          agregar color
        </button>
      </label>

      {/* todo: make this a switch. */}
      <label htmlFor="availability">
        Disponibilidad:
        <input type="checkbox" name="availability" id="availability" />
      </label>

      <label htmlFor="imagen">
        imagen:
        <input
          required
          type="file"
          name="imagen"
          id="imagen"
          onChange={(e) => setImagePreviewURL(imageUrl(e.target.files[0]))}
        />
        {imagePreviewURL && (
          <Image
            src={imagePreviewURL}
            alt="product image"
            layout="fixed"
            width="100"
            height="100"
          />
        )}
      </label>

      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductInputs;
