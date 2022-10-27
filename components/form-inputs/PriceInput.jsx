import React from "react";

const PriceInput = ({ price, setPrice }) => {
  return (
    <label htmlFor="price">
      price:
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
