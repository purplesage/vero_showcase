import React from "react";
import styles from "../styles/hero.module.css";
import heroImage from "../public/hero_shoe.jpg";
import logo from "../public/logo.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Image layout="fill" src={heroImage} alt="vashti logo" priority />
      <div className={styles.LogoContainer}>
        <h1>
          <Image src={logo} />
          Vashti
        </h1>
        <a href="#catalogo">Ver catálogo</a>
      </div>
    </div>
  );
};

export default Hero;
