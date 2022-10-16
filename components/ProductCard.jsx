import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";
import Link from "next/link";
import { converToPath } from "../lib/util";
import styles from "../styles/productCard.module.css";
import { BsCart4 } from "react-icons/bs";

const ProductCard = ({
  title,
  imageURL,
  description,
  price,
  sizes,
  colors,
  availability,
}) => {
  console.log(imageURL);
  // const [imgURL, setimgURL] = useState("");
  // const { fetchImage } = useContext(inputsContext);

  // useEffect(() => {
  //   const handleImageUrl = async () => {
  //     await fetchImage(image, setimgURL);
  //   };

  //   handleImageUrl();
  // }, []);

  <Link href={`/catalog/${converToPath(title)}`}>
    <a>
      <Image
        className={styles.Card__image}
        src={imageURL}
        alt="product image"
        width="380"
        height="375"
      />
    </a>
  </Link>;

  return (
    <div className={styles.Card}>
      {imageURL ? (
        <Link href={`/catalog/${converToPath(title)}`}>
          <a>
            <Image
              className={styles.Card__image}
              src={imageURL}
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
          <p>Tallas:</p>
          <div className={styles.CardBody__sizeList}>
            {sizes.map((size, index) => (
              <div key={index} className={styles.CardBody__size}>
                {size}
              </div>
            ))}
          </div>
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
        {availability && <BsCart4 />}
      </a>
    </div>
  );
};

export default ProductCard;
