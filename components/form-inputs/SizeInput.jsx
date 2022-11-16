import React from "react";
import styles from "../../styles/form-styles/sizeInput.module.css";
import { sizeValue } from "../../store/inputStore";
import { v4 as uuid } from "uuid";

const SizeInput = ({ isEdit, sizeList, addSize, deleteSize }) => {
  return (
    <div>
      <label
        className={isEdit ? styles.editSizeInputLabel : styles.sizeInputLabel}
        htmlFor="sizes"
      >
        <p>Tallas:</p>
        <div className={styles.wrapper}>
          <input
            autoComplete="off"
            maxLength="2"
            type="number"
            name="sizes"
            id="sizes-zustand"
          />
          <div className={styles.sizeList}>
            {sizeList.length > 0 &&
              sizeList.map((size) => (
                <div
                  className={styles.size}
                  onClick={() => deleteSize(size)}
                  key={uuid()}
                >
                  {size}
                </div>
              ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            addSize(sizeValue());
          }}
        >
          agregar talla
        </button>
      </label>
    </div>
  );
};

export default SizeInput;
