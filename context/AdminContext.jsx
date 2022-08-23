import React, { createContext, useState } from "react";
import { useRouter } from "next/router";

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
  return (
    <adminContext.Provider
      value={{ handleAdminSignInRoutePush, handleAdminSignIn, adminUser }}
    >
      {children}
    </adminContext.Provider>
  );
};

export default AdminContext;
