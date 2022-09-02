import React, { createContext, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const adminContext = createContext({});

const AdminContext = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);

  const router = useRouter();

  const handleAdminSignInRoutePush = () => {
    router.push("admin_dashboard");
  };

  const handleAdminSignIn = (user) => {
    setAdminUser(user.email);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAdminUser(user);
    }
  });
  return (
    <adminContext.Provider
      value={{
        handleAdminSignInRoutePush,
        handleAdminSignIn,
        adminUser,
        setAdminUser,
      }}
    >
      {children}
    </adminContext.Provider>
  );
};

export default AdminContext;
