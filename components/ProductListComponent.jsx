import React from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/productListComponent.module.css";

const ProductListComponent = ({ productList }) => {
  if (!productList) {
    return <div>Loading...</div>;
  }

  return (
    <div id="catalogo" className={styles.productList}>
      {productList?.length > 0 &&
        productList?.map((productObject) => {
          return (
            <ProductCard
              key={productObject.id}
              title={productObject.title}
              imageURL={productObject.imageURL}
              description={productObject.description}
              price={productObject.price}
              sizes={productObject.sizeList}
              colors={productObject.colorList}
              availability={productObject.availability}
            />
          );
        })}
    </div>
  );
};

export default ProductListComponent;
