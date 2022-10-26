import React from "react";
import useProductInputStore from "../store/inputStore";
import Image from "next/image";
import { inputsObject } from "../lib/util";

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
  } = inputsObject(useProductInputStore);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(newProduct());
      }}
    >
      <label htmlFor="">title</label>
      <input onChange={(e) => setTitle(e)} value={title} type="text" />

      <label htmlFor="">description</label>
      <input
        onChange={(e) => setDescription(e)}
        value={description}
        type="text"
      />

      <label htmlFor="">price</label>
      <input onChange={(e) => setPrice(e)} value={price} type="number" />

      <label htmlFor="categoria">
        Categoria:
        <input
          required
          list="shoeType"
          name="categoria"
          id="categoria"
          value={category}
          onChange={(e) => setCategory(e)}
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

      <label htmlFor="availability">
        Disponibilidad:
        <input
          checked={availability}
          onChange={() => setAvailability()}
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
          onChange={(e) => setImagePreviewURL(e)}
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

      <button type="submit">send</button>
    </form>
  );
};

export default ZustandDashboard;
