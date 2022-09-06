import React, { useContext } from "react";
import { inputsContext } from "../context/InputsContext";
import { v4 as uuid } from "uuid";
import styles from "../styles/sizeList.module.css";

const SizeList = ({ edit }) => {
  const { sizeList, deleteSize, addSize, sizeValue } =
    useContext(inputsContext);
  return (
    <div className={styles.sizesDiv} style={{ display: "flex" }}>
      {sizeList.length > 0 &&
        sizeList.map((size) => (
          <div onClick={() => deleteSize(size)} key={uuid()}>
            {size}
          </div>
        ))}
      <button
        type="button"
        onClick={() => {
          addSize(sizeValue(edit).value);
          sizeValue(edit).value = "";
        }}
      >
        agregar talla
      </button>
    </div>
  );
};

export default SizeList;
