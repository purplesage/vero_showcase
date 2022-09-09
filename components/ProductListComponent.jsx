import React, { useContext } from "react";
import { dashBoardContext } from "../context/DashboardContext";
import ProductCard from "./ProductCard";

const ProductListComponent = () => {
  const { productList } = useContext(dashBoardContext);
  return (
    <div>
      {productList.length > 0 &&
        productList.map((productObject) => {
          return (
            <ProductCard
              key={productObject.id}
              title={productObject.title}
              image={productObject.imageName}
              description={productObject.description}
              price={productObject.price}
              sizes={productObject.sizes}
              colors={productObject.colors}
            />
          );
        })}
    </div>
  );
};

export default ProductListComponent;
