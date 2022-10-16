import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAdminStore from "../store/admin";

const Login = () => {
  // const [adminUser, setAdminUser] = useState(null);
  const adminUser = useAdminStore((state) => state.adminUser);
  const setAdminUser = useAdminStore((state) => state.setAdminUser);

  const router = useRouter();

  const handleAdminSignInRoutePush = () => {
    router.push("admin_dashboard");
  };

  const handleDefaultLogin = (e) => {
    e.preventDefault();

    const email = e.target.login_email.value;
    const password = e.target.login_password.value;

    signInWithEmailAndPassword(auth, email, password).catch(
      console.log("WRONG!")
    );
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAdminUser(user);
    }
  });

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
