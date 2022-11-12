import React from "react";
import { colorValue } from "../../store/inputStore";
import { v4 as uuid } from "uuid";

const ColorInput = ({ clsname, colorList, addColor, deleteColor }) => {
  return (
    <label className={clsname} htmlFor="colors">
      Colores: <input type="color" name="colors" id="colors-zustand" />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          {colorList.length > 0 &&
            colorList.map((color) => (
              <div
                onClick={() => deleteColor(color)}
                style={{ backgroundColor: color, padding: "1rem" }}
                key={uuid()}
              >
                {" "}
              </div>
            ))}

          <button type="button" onClick={() => addColor(colorValue())}>
            agregar color
          </button>
        </div>
      </div>
    </label>
  );
};

export default ColorInput;
