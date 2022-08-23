import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState(null);

  const handleDefaultLogin = (e) => {
    e.preventDefault();

    const email = e.target.login_email.value;
    const password = e.target.login_password.valu;
    signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) setAdminUser(user.email);
  });

  useEffect(() => {
    if (adminUser) router.push("admin_dashboard");
  }, [adminUser]);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <form onSubmit={(e) => handleDefaultLogin(e)}>
      <label htmlFor="">
        Ingresar correo:
        <input type="email" name="login_email" id="login_email" />
      </label>
      <label htmlFor="">
        Ingresar contraseña:
        <input type="password" name="login_password" id="login_password" />
      </label>
      <button type="submit">Entrar</button>
      <button type="button" onClick={() => signInWithGoogle()}>
        Ingresar con Google
      </button>
    </form>
  );
};

export default Login;
