import React from "react";
import Image from "next/image";

const Product = ({ product }) => {
  if (product) {
    return (
      <div>
        {product?.title}{" "}
        <Image
          src={product?.imageURL}
          alt="product image"
          layout="fixed"
          width="100"
          height="100"
        />
      </div>
    );
  }

  return <div>cargando...</div>;
};

export default Product;
