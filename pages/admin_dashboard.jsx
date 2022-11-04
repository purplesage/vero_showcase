import React, { useState } from "react";
import ProductTable from "../components/product-table/ProductTable";
import AddProductForm from "../components/form-inputs/AddProductForm";
import { useRouter } from "next/router";
import useAdminStore from "../store/admin";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const AdminDashboard = () => {
  const router = useRouter();

  const adminUser = useAdminStore((state) => state.adminUser);
  const setAdminUser = useAdminStore((state) => state.setAdminUser);

  const [isOpenInputs, setIsOpenInputs] = useState(false);

  const handleShowInputs = () => {
    setIsOpenInputs((prev) => !prev);
  };

  if (adminUser) {
    return (
      <div>
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
            handleShowInputs();
          }}
        >
          abrir inputs
        </button>
        {isOpenInputs && <AddProductForm />}
        <ProductTable />
      </div>
    );
  }

  return <div>Forbidden!!!</div>;
};

export default AdminDashboard;
