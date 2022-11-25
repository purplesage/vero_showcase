import React, { useState } from "react";
import ProductTable from "../components/product-table/ProductTable";
import AddProductForm from "../components/form-inputs/AddProductForm";
import { useRouter } from "next/router";
import useAdminStore from "../store/admin";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import styles from "../styles/admin_dashboard.module.css";
import useProductInputStore from "../store/inputStore";

const AdminDashboard = () => {
  const router = useRouter();

  const adminUser = useAdminStore((state) => state.adminUser);
  const setAdminUser = useAdminStore((state) => state.setAdminUser);
  const resetInputs = useProductInputStore((state) => state.resetInputs);

  const [isOpenInputs, setIsOpenInputs] = useState(false);

  const handleShowInputs = () => {
    setIsOpenInputs((prev) => !prev);
  };

  if (adminUser) {
    return (
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.addProductButton}
            type="button"
            onClick={() => {
              handleShowInputs();
              resetInputs();
            }}
          >
            Agregar Producto
          </button>
          <button
            className={styles.logOutButton}
            type="button"
            onClick={() => {
              signOut(auth);
              setAdminUser(null);
              router.push("/");
            }}
          >
            Cerrar Sesión
          </button>
        </div>
        {isOpenInputs && <AddProductForm closeInputs={handleShowInputs} />}
        <ProductTable />
      </div>
    );
  }

  return <div>Forbidden!!!</div>;
};

export default AdminDashboard;
