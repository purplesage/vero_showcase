import React from "react";
import Image from "next/image";
import styles from "../styles/productFullCard.module.css";

const ProductFullCard = ({ product }) => {
  if (product) {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={product?.imageURL}
            alt="product image"
            layout="fill"
            priority
          />
        </div>

        <div className={styles.infoContainer}>
          <h3 className={styles.title}>{product.title}</h3>

          <p className={styles.longDescription}>{product.longDescription}</p>

          <p className={styles.price}>${product.price}</p>

          <hr className={styles.ruler} />

          <div className={styles.listContainer}>
            <div className={styles.sizeList}>
              <p>Tallas:</p>
              {product.sizeList.map((size, index) => (
                <div className={styles.size} key={index}>
                  {size}
                </div>
              ))}
            </div>

            <div className={styles.colorList}>
              <p>Colores:</p>
              {product.colorList.map((color, index) => (
                <div
                  className={styles.color}
                  key={index}
                  style={{ backgroundColor: color }}
                >
                  {" "}
                </div>
              ))}
            </div>
          </div>
          <a
            className={
              product.availability
                ? styles.buyButton__available
                : styles.buyButton__unavailable
            }
            disabled={product.availability}
            href="#compras-info"
          >
            {product.availability ? "Disponible" : "Agotado"}
          </a>
        </div>
      </div>
    );
  }

  return <div>cargando...</div>;
};

export default ProductFullCard;
