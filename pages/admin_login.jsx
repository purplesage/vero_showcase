import React from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAdminStore from "../store/admin";
import styles from "../styles/admin_login.module.css";

const Login = () => {
  const setAdminUser = useAdminStore((state) => state.setAdminUser);

  const router = useRouter();

  const handleAdminSignInRoutePush = () => {
    router.push("admin_dashboard");
  };

  const handleDefaultLogin = (e) => {
    e.preventDefault();

    const email = e.target.login_email.value;
    const password = e.target.login_password.value;

    signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAdminUser(user);
      handleAdminSignInRoutePush();
    }
  });

  return (
    <div className={styles.container}>
      <form
        className={styles.loginForm}
        onSubmit={(e) => {
          handleDefaultLogin(e);
        }}
      >
        <h3>Admin Login</h3>

        <label className={styles.userLabel} htmlFor="login_email">
          Usuario:
          <input type="email" name="login_email" id="login_email" />
        </label>
        <label className={styles.passwordLabel} htmlFor="login_password">
          Contraseña:
          <input type="password" name="login_password" id="login_password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
