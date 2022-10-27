import React from "react";
import { sizeValue } from "../../store/inputStore";

import { v4 as uuid } from "uuid";

const SizeInput = ({ sizeList, addSize, deleteSize }) => {
  return (
    <label htmlFor="sizes">
      Tallas:
      <input type="number" name="sizes" id="sizes-zustand" />
      <div>
        <div>
          {sizeList.length > 0 &&
            sizeList.map((size) => (
              <div onClick={() => deleteSize(size)} key={uuid()}>
                {size}
              </div>
            ))}
          <button
            type="button"
            onClick={() => {
              addSize(sizeValue());
            }}
          >
            agregar talla
          </button>
        </div>
      </div>
    </label>
  );
};

export default SizeInput;
