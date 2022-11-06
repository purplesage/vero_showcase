import React from "react";
import Product from "../../components/Product";
import { useRouter } from "next/router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { converToPath } from "../../lib/util";
import { fetchShoeList } from "../../lib/util";

const ProductPage = () => {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { title } = router.query;
  const { data } = useQuery(["shoeList"], fetchShoeList);

  const product = data?.find(
    (productObject) => converToPath(productObject.title) === title
  );

  return <Product product={product} />;
};

export default ProductPage;
