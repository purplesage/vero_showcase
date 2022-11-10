import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ProductModal from "./ProductModal";
import { FaSearchPlus } from "react-icons/fa";
import styles from "../../styles/product-table/productRow.module.css";

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
      <tr className={styles.productRow} key={item.id}>
        <td>
          <button onClick={handleOpenModal}>
            <FaSearchPlus />
          </button>
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>
          <div className={styles.colorList}>
            {item?.colorList?.map((color) => (
              <div
                className={styles.colorDiv}
                key={uuid()}
                style={{ backgroundColor: color }}
              >
                {" "}
              </div>
            ))}
          </div>
        </td>
        <td>
          <div>
            {item?.sizeList?.map((size) => (
              <p key={uuid()}>{size}</p>
            ))}
          </div>
        </td>
        <td>{item.availability ? "disponible" : "no disponible"}</td>
      </tr>
    </>
  );
};

export default ProductRow;
