import React, { useContext, useState } from "react";
import Image from "next/image";
import { inputsContext } from "../context/InputsContext";

const ProductCard = ({ title, image, description, price, sizes, colors }) => {
  const [imgURL, setimgURL] = useState("");
  const { fetchImage } = useContext(inputsContext);

  const handleImageUrl = (async () => {
    await fetchImage(image, setimgURL);
  })();

  return (
    <div>
      <h3>{title}</h3>
      {imgURL ? (
        <Image
          src={imgURL}
          alt="product image"
          layout="fixed"
          width="100"
          height="100"
        />
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
