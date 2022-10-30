import React, { useState } from "react";
import ProductRow from "../product-table/ProductRow";

import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { fetchShoeList } from "../../lib/util";
import { v4 as uuid } from "uuid";
import useProductInputStore from "../../store/inputStore";

import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import EditProductForm from "../form-inputs/EditProductForm";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ["shoeList"],
    fetchShoeList
  );

  const updateProductList = async (updatedList) => {
    const docRef = doc(dataBase, `db/products`);
    await updateDoc(docRef, { shoeList: updatedList });
  };

  const deleteProduct = async (deleteId) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
    await updateProductList(shoeList);
  };

  const productDeletionMutation = useMutation(
    (deleteId) => deleteProduct(deleteId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["shoeList"]);
      },
    }
  );

  if (isLoading) return <div>Cargando...</div>;

  if (isError) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Título</th>
          <th>Descripcion</th>
          <th>Price</th>
          <th>Categoría</th>
          <th>Colores</th>
          <th>Tallas</th>
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 &&
          data.map((item) => (
            <ProductRow
              key={item.id}
              item={item}
              deleteProductFunction={productDeletionMutation}
            />
          ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
