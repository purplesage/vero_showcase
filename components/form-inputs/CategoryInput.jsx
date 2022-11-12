import React from "react";

const CategoryInput = ({ clsname, category, setCategory }) => {
  return (
    <label className={clsname} htmlFor="categoria">
      <p>Categoría:</p>
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
  );
};

export default CategoryInput;
