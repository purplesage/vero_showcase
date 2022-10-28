import React from "react";

import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { fetchShoeList } from "../../lib/util";
import { v4 as uuid } from "uuid";

import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";

const ProductTable = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ["shoeList"],
    fetchShoeList
  );

  const deleteProduct = async (deleteId) => {
    const shoeList = data.filter((shoeObject) => shoeObject.id !== deleteId);
    const docRef = doc(dataBase, `db/products`);
    await updateDoc(docRef, { shoeList });
  };

  const deleteProductFromFirestore = useMutation(
    (deleteId) => deleteProduct(deleteId),
    {
      onSuccess: () => {
        // Invalidate and refetch
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
          <th>delete</th>
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
            <tr key={item.id}>
              <td>
                <p>{item.id}</p>
                <button
                  onClick={() => deleteProductFromFirestore.mutate(item.id)}
                >
                  Borrar producto
                </button>
              </td>

              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>

              <td>
                {item.sizeList.map((size) => (
                  <p key={uuid()}>{size}</p>
                ))}
              </td>
              <td>
                {item.colorList.map((color) => (
                  <p key={uuid()}>{color}</p>
                ))}
              </td>
              <td>
                {item.availability ? (
                  <p>"disponible"</p>
                ) : (
                  <p>"no disponible"</p>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
