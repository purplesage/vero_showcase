import React from "react";
import { useRouter } from "next/router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { converToPath } from "../../lib/util";
import { fetchShoeList } from "../../lib/util";
import { jsonEval } from "@firebase/util";
const ProductPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { title } = router.query;
  const { data } = useQuery(["shoeList"], fetchShoeList);
  const productInfo = data.find(
    (productObject) => converToPath(productObject.title) === title
  );

  return <div>{productInfo.title}</div>;
};

export default ProductPage;
