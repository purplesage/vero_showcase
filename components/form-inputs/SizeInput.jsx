import React from "react";
import { sizeValue } from "../../store/inputStore";

import { v4 as uuid } from "uuid";

const SizeInput = ({ clsname, sizeList, addSize, deleteSize }) => {
  return (
    <div>
      <label className={clsname} htmlFor="sizes">
        Tallas:
        <input maxLength="2" type="number" name="sizes" id="sizes-zustand" />
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
    </div>
  );
};

export default SizeInput;
