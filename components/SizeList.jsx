import React, { useContext } from "react";
import { inputsContext } from "../context/InputsContext";
import { v4 as uuid } from "uuid";

const SizeList = () => {
  const { sizeList, deleteSize, addSize, sizeValue } =
    useContext(inputsContext);
  return (
    <>
      {sizeList.length > 0 &&
        sizeList.map((size) => (
          <div onClick={() => deleteSize(size)} key={uuid()}>
            {size}
          </div>
        ))}
      <button
        type="button"
        onClick={() => {
          addSize(sizeValue().value);
          sizeValue().value = "";
        }}
      >
        agregar talla
      </button>
    </>
  );
};

export default SizeList;
