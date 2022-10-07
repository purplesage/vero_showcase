import React from "react";
import { converToPath } from "../../lib/util";
import Product from "../../components/Product";
import { dataBase } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
const ProductPage = ({ productInfo }) => {
  return <Product product={productInfo}></Product>;
};

export default ProductPage;

const fetchList = async () => {
  //todo: use index to get single item.
  const ref = doc(dataBase, `db/products`);
  const document = await getDoc(ref);
  const productList = document.data().productList;

  return productList;
};

export async function getServerSideProps({ params }) {
  const title = params.title;
  //todo: fetch just a single item.
  const productList = await fetchList();
  const product = productList.find(
    (product) => converToPath(product.title) === title
  );

  return {
    props: {
      productInfo: product,
    },
  };
}
