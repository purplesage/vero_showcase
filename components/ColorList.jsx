import React, { useContext } from "react";
import { inputsContext } from "../context/InputsContext";
import { v4 as uuid } from "uuid";
import styles from "../styles/colorList.module.css";

const ColorList = ({ edit }) => {
  const { deleteColor, addColor, colorValue, colorList } =
    useContext(inputsContext);
  return (
    <div className={styles.colorDiv} style={{ display: "flex" }}>
      {colorList.length > 0 &&
        colorList.map((color) => (
          <div
            onClick={() => deleteColor(color)}
            style={{ backgroundColor: color }}
            key={uuid()}
          >
            {" "}
          </div>
        ))}

      <button type="button" onClick={() => addColor(colorValue(edit).value)}>
        agregar color
      </button>
    </div>
  );
};

export default ColorList;
