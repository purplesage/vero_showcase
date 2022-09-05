import React, { useContext, useState } from "react";
import { adminContext } from "../context/AdminContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import ProductTable from "../components/ProductTable";
import styles from "../styles/admin_dashboard.module.css";
import ProductInputs from "../components/ProductInputs";
import { inputsContext } from "../context/InputsContext";

const AdminDashboard = () => {
  const router = useRouter();
  const { adminUser, setAdminUser } = useContext(adminContext);

  const { inputReset } = useContext(inputsContext);

  const [isOpenInputs, setIsOpenInputs] = useState(false);

  if (adminUser) {
    return (
      <div className={styles.mainDiv}>
        Admin Dashboard page{" "}
        <button
          type="button"
          onClick={() => {
            signOut(auth);
            setAdminUser(null);
            router.push("/");
          }}
        >
          sign out
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpenInputs(true);
            inputReset();
          }}
        >
          abrir inputs
        </button>
        {isOpenInputs && <ProductInputs setIsOpenInputs={setIsOpenInputs} />}
        <ProductTable showAs="edit" />
      </div>
    );
  }

  return <div>forbidden!</div>;
};

export default AdminDashboard;
