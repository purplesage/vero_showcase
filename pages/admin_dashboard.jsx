import React, { useContext } from "react";
import { adminContext } from "../context/AdminContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import ProductList from "../components/ProductList";
import styles from "../styles/admin_dashboard.module.css";
import ProductInputs from "../components/ProductInputs";

const AdminDashboard = () => {
  const router = useRouter();
  const { adminUser } = useContext(adminContext);

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
        <ProductInputs />
        <div className={styles.productDisplay}>
          <ProductList showAs="edit" />
        </div>
      </div>
    );
  }

  return <div>forbidden!</div>;
};

export default AdminDashboard;
