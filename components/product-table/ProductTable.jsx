import React, { useState } from "react";

import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { fetchShoeList } from "../../lib/util";
import { v4 as uuid } from "uuid";
import useProductInputStore from "../../store/inputStore";

import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import EditProductForm from "../form-inputs/EditProductForm";

const ProductTable = () => {
  const queryClient = useQueryClient();
  const [showEditInputs, setShowInputs] = useState(false);
  const setInputValuesForEditing = useProductInputStore(
    (state) => state.setInputValuesForEditing
  );

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
            <tr key={item.id}>
              <td>
                {showEditInputs && <EditProductForm imageURL={item.imageURL} />}
                <button
                  onClick={() => {
                    setInputValuesForEditing(item);
                    setShowInputs((prevState) => !prevState);
                  }}
                >
                  Editar
                </button>
              </td>
              <td>
                <button onClick={() => productDeletionMutation.mutate(item.id)}>
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
