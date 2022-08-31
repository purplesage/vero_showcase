import React, { useContext, useState } from "react";
import { dashBoardContext } from "../context/DashboardContext";
import { v4 as uuid } from "uuid";
import { uploadBytesResumable, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import styles from "../styles/admin_dashboard.module.css";

const ProductInputs = () => {
  const { addProduct } = useContext(dashBoardContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState("");
  const [colors, setColors] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageName, setImageName] = useState("");

  //todo: esta es la forma básica del objecto. Se necesitan inputs para todos ellos, excepto para el id.
  const nuevoProducto = () => {
    return {
      id: uuid(),
      title: title,
      description: description,
      price: price,
      categoria: "string",
      tallas: [],
      colores: [],
      disponibilidad: true,
      imageName: imageName,
    };
  };

  const uploadImage = async (imageFile) => {
    if (!imageFile) return;

    try {
      const fileRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytesResumable(fileRef, imageFile);
    } catch (err) {
      console.warn(err.message);
    }
  };

  return (
    <form
      className={styles.addProductForm}
      action="Agregar Producto"
      onSubmit={(e) => {
        addProduct(nuevoProducto(), e);
        uploadImage(e.target.imagen.files[0]);
      }}
    >
      <label htmlFor="titulo">
        Titulo:
        <input
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
        <input type="text" name="categoria" id="categoria" />
      </label>

      {/* todo: handle array later. */}
      <label htmlFor="tallas">
        Tallas:
        <input type="text" name="tallas" id="tallas" />
      </label>

      <label htmlFor="colores">
        Colores:
        <input type="text" name="colores" id="colores" />
      </label>

      {/* todo: make this a switch. */}
      <label htmlFor="disponibilidad">
        Disponibilidad:
        <input type="checkbox" name="disponibilidad" id="disponibilidad" />
      </label>

      <label htmlFor="imagen">
        imagen:
        <input
          type="file"
          name="imagen"
          id="imagen"
          onChange={(e) => setImageName(e.target.files[0].name)}
        />
      </label>

      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductInputs;
