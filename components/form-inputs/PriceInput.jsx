import React from "react";

const PriceInput = ({ clsname, price, setPrice }) => {
  return (
    <label className={clsname} htmlFor="price">
      <p>Precio:</p>
      <input
        name="price"
        onChange={(e) => setPrice(e)}
        value={price}
        type="number"
      />
    </label>
  );
};

export default PriceInput;
