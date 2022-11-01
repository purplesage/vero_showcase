import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ProductModal from "./ProductModal";

const ProductRow = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <ProductModal
          handleCloseModal={handleCloseModal}
          productObject={item}
        />
      )}
      <tr key={item.id}>
        <td>
          <button onClick={handleOpenModal}>Ver producto</button>
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>
          {item?.colorList?.map((color) => (
            <p key={uuid()}>{color}</p>
          ))}
        </td>
        <td>
          {item?.sizeList?.map((size) => (
            <p key={uuid()}>{size}</p>
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
