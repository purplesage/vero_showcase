import React, { useState, useContext, useEffect } from "react";
import { inputsContext } from "../context/InputsContext";
import Image from "next/image";

const Product = ({ product }) => {
  const [imgURL, setimgURL] = useState("");
  const { fetchImage } = useContext(inputsContext);

  useEffect(() => {
    const handleImageUrl = async () => {
      await fetchImage(product.imageName, setimgURL);
    };

    handleImageUrl();
  }, []);

  return (
    <div>
      {product.title}{" "}
      <Image
        src={imgURL}
        alt="product image"
        layout="fixed"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Product;
