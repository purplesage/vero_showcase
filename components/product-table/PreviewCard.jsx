import React from "react";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";
import { MdFullscreenExit } from "react-icons/md";

import styles from "../../styles/product-table/previewCard.module.css";
const PreviewCard = ({
  productObject,
  handleCloseModal,
  productDeletionMutation,
  handleShowEditMode,
}) => {
  const {
    title,
    description,
    longDescription,
    price,
    category,
    sizeList,
    colorList,
    availability,
    id,
  } = productObject;

  if (productDeletionMutation.isLoading)
    return (
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    );

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleCloseModal}>
        <MdFullscreenExit />
      </button>
      <Image
        className={styles.image}
        src={productObject.imageURL}
        alt="product image"
        width="380"
        height="380"
      />
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>"{longDescription}"</p>
        <h4 className={styles.price}>${price}</h4>
        <p className={styles.description}>{category}</p>

        <hr className={styles.ruler} />

        <div className={styles.listLabels}>
          <p>Tallas:</p>
          <p>Colores:</p>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.sizeList}>
            {sizeList?.map((size, index) => (
              <p className={styles.size} key={index}>
                {size}
              </p>
            ))}
          </div>

          <div className={styles.colorList}>
            {colorList?.map((color, index) => (
              <div
                style={{ backgroundColor: color }}
                className={styles.color}
                key={index}
              >
                {" "}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actionButtonsContainer}>
          <button className={styles.editButton} onClick={handleShowEditMode}>
            Editar
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => productDeletionMutation.mutate(id)}
          >
            Borrar producto
          </button>
        </div>
        <p
          className={
            availability ? styles.buyButton : styles.buyButton_unavailable
          }
        >
          {availability ? "Disponible" : "Agotado"}
        </p>
      </div>
    </div>
  );
};

export default PreviewCard;
