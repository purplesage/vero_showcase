import React, { useState } from "react";
import useProductInputStore from "../../store/inputStore";
import EditProductForm from "../form-inputs/EditProductForm";
import { v4 as uuid } from "uuid";

const ProductRow = ({ item, deleteProductFunction }) => {
  const [showEditInputs, setShowInputs] = useState(false);
  const setInputValuesForEditing = useProductInputStore(
    (state) => state.setInputValuesForEditing
  );

  return (
    <>
      {showEditInputs && <EditProductForm imageURL={item.imageURL} />}
      <tr key={item.id}>
        <td>
          <button
            onClick={() => {
              setInputValuesForEditing(item);
              setShowInputs((prevState) => !prevState);
            }}
          >
            Editar
          </button>
        </td>
        <td>
          <button onClick={() => deleteProductFunction.mutate(item.id)}>
            Borrar producto
          </button>
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>
          {item.sizeList.map((size) => (
            <p key={uuid()}>{size}</p>
          ))}
        </td>
        <td>
          {item.colorList.map((color) => (
            <p key={uuid()}>{color}</p>
          ))}
        </td>
        <td>
          {item.availability ? <p>"disponible"</p> : <p>"no disponible"</p>}
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
