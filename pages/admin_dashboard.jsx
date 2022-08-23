import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
const AdminDashboard = () => {
  const router = useRouter();
  return (
    <div>
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
    </div>
  );
};

export default AdminDashboard;
