import React, { useContext } from "react";
import { inputsContext } from "../context/InputsContext";
import { v4 as uuid } from "uuid";

const ColorList = () => {
  const { deleteColor, addColor, colorValue, colorList } =
    useContext(inputsContext);
  return (
    <>
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

      <button type="button" onClick={() => addColor(colorValue().value)}>
        agregar color
      </button>
    </>
  );
};

export default ColorList;
