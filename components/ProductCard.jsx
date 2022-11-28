import React from "react";
import Image from "next/image";
import Link from "next/link";
import { converToPath } from "../lib/util";
import styles from "../styles/productCard.module.css";
import { TailSpin } from "react-loader-spinner";
import { useWindowSize } from "../lib/util";

const ProductCard = ({
  title,
  imageURL,
  description,
  price,
  sizes,
  colors,
  availability,
}) => {
  const windowSize = useWindowSize();
  return (
    <div className={styles.Card}>
      <Link href={`/catalog/${converToPath(title)}`}>
        {imageURL ? (
          <a>
            <Image
              className={styles.Card__image}
              src={imageURL}
              alt="product image"
              width={windowSize.width > 640 ? "380" : "330"}
              height={windowSize.width > 640 ? "380" : "330"}
            />
          </a>
        ) : (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        )}
      </Link>
      <div className={styles.CardBody}>
        <h3
          className={styles.CardBody__title}
          style={{ opacity: !availability && "0.5" }}
        >
          {title}
        </h3>
        <p className={styles.CardBody__description}>{description}</p>
        <h4
          className={styles.CardBody__price}
          style={{ opacity: !availability && "0.5" }}
        >
          ${price}
        </h4>
        <hr className={styles.CardBody__ruler} />
        <div
          className={styles.CardBody__listContainer}
          style={{ opacity: !availability && "0.5" }}
        >
          <div className={styles.sizeList__container}>
            <p>Tallas:</p>
            <div className={styles.CardBody__sizeList}>
              {sizes.map((size, index) => (
                <div key={index} className={styles.CardBody__size}>
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.colorList__container}>
            <p>Colores:</p>
            <div className={styles.CardBody__colorList}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={styles.CardBody__color}
                  style={{ backgroundColor: color }}
                >
                  {" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a
        disabled={availability}
        className={
          availability
            ? styles.Card__buyButton
            : styles.Card__buyButton_unavailable
        }
        href="#compras-info"
      >
        {availability ? "Disponible" : "Agotado"}
      </a>
    </div>
  );
};

export default ProductCard;
