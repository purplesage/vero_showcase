import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <svg
        className={styles.Container__logo}
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M60 33.8239C60 48.2806 42.776 60 21.5292 60C0.282445 60 46.0949 36.5013 46.0949 22.0446C46.0949 7.58798 -16.8672 0.44934 4.37963 0.44934C10.2234 0.44934 56.1422 -2.12023 52.4378 5.0301C42.6738 23.877 -26.0211 62.2887 60 33.8239Z" />
      </svg>
      <p>©2022 Vashti</p>
    </div>
  );
};

export default Footer;
