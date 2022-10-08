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
              width="350"
              height="350"
            />
          </a>
        </Link>
      ) : (
        <p>loading...</p>
      )}
      <div className={styles.CardBody}>
        <h3 className={styles.CardBody__title}>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <h4>{sizes}</h4>
        <h4>{colors}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
