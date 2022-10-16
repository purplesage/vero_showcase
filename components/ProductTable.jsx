import React, { useContext } from "react";
import { dashBoardContext } from "../context/DashboardContext";
import ProductRow from "./ProductRow";

//todo: use default imports.
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

const ProductTable = () => {
  const { productList } = useContext(dashBoardContext);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>Titulo</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Colores</TableCell>
              <TableCell>Tallas</TableCell>
              <TableCell>Disponibilidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.length > 0 &&
              productList.map((productObject) => (
                <ProductRow
                  key={productObject.id}
                  id={productObject.id}
                  title={productObject.title}
                  description={productObject.description}
                  price={productObject.price}
                  category={productObject.category}
                  colors={productObject.colors}
                  sizes={productObject.sizes}
                  availability={productObject.availability}
                  imageName={productObject.imageName}
                  imageURL={productObject.imageURL}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;

//todo: implement delete button and image
{
  /* <button
type="button"
onClick={() => {
  deleteProduct(productObject.id);
  deleteFileFromStorage(productObject.imageName);
}}
>
Borrar Producto
</button> */
}

/* 
<Image
                src={fetchImage(productObject.imageName)}
                alt="product image"
                layout="fixed"
                width="100"
                height="100"
              /> */
