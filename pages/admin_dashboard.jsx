import React, { useContext, useState } from "react";
import { adminContext } from "../context/AdminContext";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { dashBoardContext } from "../context/DashboardContext";
import styles from "../styles/admin_dashboard.module.css";

import { v4 as uuid } from "uuid";

const AdminDashboard = () => {
  const router = useRouter();
  const { adminUser, handleAdminSignIn } = useContext(adminContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState("");
  const [colors, setColors] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageFile, setImageFile] = useState("");

  const { addProduct, productList } = useContext(dashBoardContext);

  //todo: esta es la forma básica del objecto. Se necesitan inputs para todos ellos, excepto para el id.
  const nuevoProducto = () => {
    return {
      id: uuid(),
      title: title,
      description: description,
      price: price,
      categoria: "string",
      tallas: [],
      colores: [],
      disponibilidad: true,
      imagen: "*file*",
    };
  };

  if (adminUser) {
    return (
      <div className={styles.mainDiv}>
        Admin Dashboard page{" "}
        <button
          type="button"
          onClick={() => {
            signOut(auth);
            router.push("/");
          }}
        >
          sign out
        </button>
        <form
          className={styles.addProductForm}
          action="Agregar Producto"
          onSubmit={(e) => addProduct(nuevoProducto(), e)}
        >
          <label htmlFor="titulo">
            Titulo:
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="descripcion">
            Descripcion:
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label htmlFor="precio">
            Precio:
            <input
              type="text"
              name="precio"
              id="precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* todo: handle caregory later. */}
          <label htmlFor="categoria">
            Categoria:
            <input type="text" name="categoria" id="categoria" />
          </label>

          {/* todo: handle array later. */}
          <label htmlFor="tallas">
            Tallas:
            <input type="text" name="tallas" id="tallas" />
          </label>

          <label htmlFor="colores">
            Colores:
            <input type="text" name="colores" id="colores" />
          </label>

          {/* todo: make this a switch. */}
          <label htmlFor="disponibilidad">
            Disponibilidad:
            <input type="text" name="disponibilidad" id="disponibilidad" />
          </label>

          <label htmlFor="imagen">
            imagen:
            <input type="text" name="imagen" id="imagen" />
          </label>

          <button type="submit">Agregar Producto</button>
        </form>
        <div className={styles.productDisplay}>
          {productList.length > 0 &&
            productList.map((productObject) => (
              <div key={productObject.id}>
                {productObject.title} | {productObject.description} |{" "}
                {productObject.price}
              </div>
            ))}
        </div>
      </div>
    );
  }

  return <div>forbidden!</div>;
};

export default AdminDashboard;
