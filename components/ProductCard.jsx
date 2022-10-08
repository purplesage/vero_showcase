import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";
import Link from "next/link";
import { converToPath } from "../lib/util";
import styles from "../styles/productCard.module.css";

const ProductCard = ({ title, image, description, price, sizes, colors }) => {
  const [imgURL, setimgURL] = useState("");
  const { fetchImage } = useContext(inputsContext);

  useEffect(() => {
    const handleImageUrl = async () => {
      await fetchImage(image, setimgURL);
    };

    handleImageUrl();
  }, []);

  return (
    <div className={styles.Card}>
      {imgURL ? (
        <Link href={`/catalog/${converToPath(title)}`}>
          <a>
            <Image
              className={styles.Card__image}
              src={imgURL}
              alt="product image"
              width="380"
              height="375"
            />
          </a>
        </Link>
      ) : (
        <p>loading...</p>
      )}
      <div className={styles.CardBody}>
        <h3 className={styles.CardBody__title}>{title}</h3>
        <p className={styles.CardBody__description}>{description}</p>
        <h4 className={styles.CardBody__price}>${price}</h4>
        <div className={styles.CardBody__listContainer}>
          <h4>Tallas:</h4>
          <div className={styles.CardBody__sizeList}>
            {sizes.map((size) => (
              <div className={styles.CardBody__size}>{size}</div>
            ))}
          </div>
          <h4>Colores:</h4>
          <div className={styles.CardBody__colorList}>
            {colors.map((color) => (
              <div
                className={styles.CardBody__color}
                style={{ backgroundColor: color }}
              >
                {" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <a className={styles.Card__buyButton} href="#">
        Comprar
      </a>
    </div>
  );
};

export default ProductCard;
