import React from "react";
import styles from "../../styles/form-styles/colorInput.module.css";
import { colorValue } from "../../store/inputStore";
import { v4 as uuid } from "uuid";

const ColorInput = ({ isEdit, colorList, addColor, deleteColor }) => {
  return (
    <div>
      <label
        className={isEdit ? styles.editColorInputLabel : styles.colorInputLabel}
        htmlFor="colors"
      >
        <p>Colores:</p>

        <div className={isEdit ? styles.wrapper : styles.wrapper}>
          <input type="color" name="colors" id="colors-zustand" />
          <div className={isEdit ? styles.colorList : styles.colorList}>
            {colorList.length > 0 &&
              colorList.map((color) => (
                <div
                  className={styles.color}
                  onClick={() => deleteColor(color)}
                  style={{ backgroundColor: color }}
                  key={uuid()}
                >
                  {" "}
                </div>
              ))}
          </div>
        </div>
        <button type="button" onClick={() => addColor(colorValue())}>
          agregar color
        </button>
      </label>
    </div>
  );
};

export default ColorInput;
