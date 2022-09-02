import React, { useContext } from "react";
import { adminContext } from "../context/AdminContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import ProductTable from "../components/ProductTable";
import styles from "../styles/admin_dashboard.module.css";
import ProductInputs from "../components/ProductInputs";

const AdminDashboard = () => {
  const router = useRouter();
  const { adminUser, setAdminUser } = useContext(adminContext);

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
        <ProductInputs />
        <ProductTable showAs="edit" />
      </div>
    );
  }

  return <div>forbidden!</div>;
};

export default AdminDashboard;
