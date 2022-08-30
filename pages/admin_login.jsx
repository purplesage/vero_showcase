import React, { useContext, useEffect } from "react";
import { adminContext } from "../context/AdminContext";
import { auth } from "../firebaseConfig";

import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { handleAdminSignInRoutePush, adminUser } = useContext(adminContext);

  const handleDefaultLogin = (e) => {
    e.preventDefault();

    const email = e.target.login_email.value;
    const password = e.target.login_password.value;

    signInWithEmailAndPassword(auth, email, password).catch(
      console.log("WRONG!")
    );
  };

  useEffect(() => {
    if (adminUser) {
      handleAdminSignInRoutePush();
    }
  }, [adminUser]);

  return (
    <form
      onSubmit={(e) => {
        handleDefaultLogin(e);
      }}
    >
      <label htmlFor="">
        Ingresar correo:
        <input type="email" name="login_email" id="login_email" />
      </label>
      <label htmlFor="">
        Ingresar contraseña:
        <input type="password" name="login_password" id="login_password" />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
