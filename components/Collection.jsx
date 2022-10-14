import React from "react";
import ProductListComponent from "./ProductListComponent";

const Collection = ({ productList }) => {
  return (
    <div>
      <ProductListComponent productList={productList} />
    </div>
  );
};

export default Collection;
