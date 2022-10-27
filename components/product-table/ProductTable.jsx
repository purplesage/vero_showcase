import React from "react";

import { useQueryClient, useQuery } from "react-query";
import { fetchProductList } from "../../lib/util";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery("productList", fetchProductList);
  return (
    <div>{data?.length > 0 && data.map((item) => <div>{item.title}</div>)}</div>
  );
};

export default ProductTable;
