import React from "react";
import styles from "../styles/hero.module.css";
import heroImage from "../public/hero_shoe.jpg";
import logo from "../public/logo.svg";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.instagramIcon}>
        <BsInstagram />
      </div>
      <div className="custom-shape-divider-top-1665269735">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
