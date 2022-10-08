import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.logoContainer}>
        <h1>
          <img src="/logo.svg" alt="vashti logo" />
          Vashti
        </h1>
        <a href="#catalogo">Ver catálogo</a>
      </div>
    </div>
  );
};

export default Hero;
