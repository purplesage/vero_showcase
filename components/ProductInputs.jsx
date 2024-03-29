import React, { useContext } from "react";
import { dashBoardContext } from "../context/DashboardContext";

import styles from "../styles/admin_dashboard.module.css";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";
import SizeList from "./SizeList";
import ColorList from "./ColorList";

const ProductInputs = ({ setIsOpenInputs }) => {
  const { addProduct } = useContext(dashBoardContext);

  const {
    titleInput,
    setTitleInput,
    descriptionInput,
    setDescriptionInput,
    priceInput,
    setPriceInput,
    setCategoryInput,
    availabilityInput,
    setAvailabilityInput,
    imagePreviewURL,
    setImageName,
    setImagePreviewURL,
    inputReset,
    imageUrl,
    handleProductCreation,
  } = useContext(inputsContext);

  return (
    <form
      id="product-form"
      className={styles.addProductForm}
      action="Agregar Producto"
      onSubmit={(e) => {
        handleProductCreation(addProduct, e.target.imagen.files[0], e);
        setImagePreviewURL("");
        setIsOpenInputs(false);
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
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </label>

      <label htmlFor="descripcion">
        Descripcion:
        <input
          required
          type="text"
          name="descripcion"
          id="descripcion"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </label>

      <label htmlFor="precio">
        Precio:
        <input
          required
          type="number"
          name="precio"
          id="precio"
          value={priceInput}
          onChange={(e) => setPriceInput(e.target.value)}
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
          onChange={(e) => setCategoryInput(e.target.value)}
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
        <input type="number" name="sizes" id="sizes" />
        <div className={styles.sizesDiv} style={{ display: "flex" }}>
          <SizeList />
        </div>
      </label>

      <label htmlFor="colors">
        Colores: <input type="color" name="colors" id="colors" />
        <div className={styles.colorDiv} style={{ display: "flex" }}>
          <ColorList />
        </div>
      </label>

      {/* todo: make this a switch. */}
      <label htmlFor="availability">
        Disponibilidad:
        <input
          checked={availabilityInput}
          onChange={() => setAvailabilityInput(!availabilityInput)}
          type="checkbox"
          name="availability"
          id="availability"
        />
      </label>

      <label htmlFor="imagen">
        imagen:
        <input
          required
          type="file"
          name="imagen"
          id="imagen"
          onChange={(e) => {
            setImagePreviewURL(imageUrl(e.target.files[0]));
            setImageName(e.target.files[0].name);
          }}
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
