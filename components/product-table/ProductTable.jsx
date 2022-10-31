import React from "react";
import ProductRow from "../product-table/ProductRow";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchShoeList } from "../../lib/util";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ["shoeList"],
    fetchShoeList
  );

  if (isLoading) return <div>Cargando...</div>;

  if (isError) return <div>Ha ocurrido un error: {error.message}</div>;

  return (
    <div>
      <table>
        <thead>
          <tr>
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
            data.map((item) => <ProductRow key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
