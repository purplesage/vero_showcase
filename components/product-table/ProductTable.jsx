import React from "react";
import ProductRow from "../product-table/ProductRow";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchShoeList } from "../../lib/util";
import styles from "../../styles/product-table/productTable.module.css";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ["shoeList"],
    fetchShoeList
  );

  if (isLoading) return <div>Cargando...</div>;

  if (isError) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Ver producto</th>
          <th>Título</th>
          <th>Descripción corta</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Colores</th>
          <th>Tallas</th>
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 &&
          data.map((item) => <ProductRow key={item.id} item={item} />)}
      </tbody>
    </table>
  );
};

export default ProductTable;
