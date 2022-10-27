import React from "react";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchProductList } from "../../lib/util";
import { v4 as uuid } from "uuid";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery(["productList"], fetchProductList);
  return (
    <div>
      {data?.length > 0 &&
        data.map((item) => <div key={uuid()}>{item.title}</div>)}
    </div>
  );
};

export default ProductTable;
