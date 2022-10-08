import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";
import Link from "next/link";
import { converToPath } from "../lib/util";
import styles from "../styles/productCard.module.css";
import { BsCart4 } from "react-icons/bs";
import { RiEmotionSadLine } from "react-icons/ri";

const ProductCard = ({
  title,
  image,
  description,
  price,
  sizes,
  colors,
  availability,
}) => {
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
        <h3
          className={styles.CardBody__title}
          style={{ opacity: !availability && "0.7" }}
        >
          {title}
        </h3>
        <p className={styles.CardBody__description}>{description}</p>
        <h4
          className={styles.CardBody__price}
          style={{ opacity: !availability && "0.7" }}
        >
          ${price}
        </h4>
        <hr className={styles.CardBody__ruler} />
        <div
          className={styles.CardBody__listContainer}
          style={{ opacity: !availability && "0.7" }}
        >
          <p>Tallas:</p>
          <div className={styles.CardBody__sizeList}>
            {sizes.map((size) => (
              <div className={styles.CardBody__size}>{size}</div>
            ))}
          </div>
          <p>Colores:</p>
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
      <a
        disabled={availability}
        className={
          availability
            ? styles.Card__buyButton
            : styles.Card__buyButton_unavailable
        }
        href="#"
      >
        {availability ? "Comprar" : "Agotado"}
        {availability ? <BsCart4 /> : <RiEmotionSadLine />}
      </a>
    </div>
  );
};

export default ProductCard;
