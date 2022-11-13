import React from "react";
import { colorValue } from "../../store/inputStore";
import { v4 as uuid } from "uuid";

const ColorInput = ({ clsname, colorList, addColor, deleteColor }) => {
  return (
    <div>
      <label className={clsname} htmlFor="colors">
        <p>Colores:</p>

        <div style={{ display: "flex" }}>
          <input type="color" name="colors" id="colors-zustand" />
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
        </div>
        <button type="button" onClick={() => addColor(colorValue())}>
          agregar color
        </button>
      </label>
    </div>
  );
};

export default ColorInput;
