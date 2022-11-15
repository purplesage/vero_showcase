import React from "react";
import styles from "../../styles/form-styles/priceInput.module.css";

const PriceInput = ({ isEdit, price, setPrice }) => {
  return (
    <label
      className={isEdit ? styles.editPriceInputLabel : styles.priceInputLabel}
      htmlFor="price"
    >
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
