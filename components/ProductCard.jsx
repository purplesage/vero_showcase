import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";
import Link from "next/link";
import { converToPath } from "../lib/util";

const ProductCard = ({ title, image, description, price, sizes, colors }) => {
  const [imgURL, setimgURL] = useState("");
  const { fetchImage } = useContext(inputsContext);

  useEffect(() => {
    const handleImageUrl = async () => {
      await fetchImage(image, setimgURL);
    };

    handleImageUrl();
  }, []);
  // converToPath(title)
  return (
    <div>
      <h3>{title}</h3>
      {imgURL ? (
        <Link href={`/catalog/${converToPath(title)}`}>
          <a>
            <Image
              src={imgURL}
              alt="product image"
              layout="fixed"
              width="100"
              height="100"
            />
          </a>
        </Link>
      ) : (
        <p>loading...</p>
      )}
      <p>{description}</p>
      <h4>{price}</h4>
      <h4>{sizes}</h4>
      <h4>{colors}</h4>
    </div>
  );
};

export default ProductCard;
