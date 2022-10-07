import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>
        <img src="/logo.svg" alt="vashti logo" />
        Vashti
      </h1>
    </div>
  );
};

export default Hero;
