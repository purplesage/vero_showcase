import React from "react";
import styles from "../styles/contacto.module.css";
import Image from "next/image";
import pic from "../public/contact1.jpg";

const Contacto = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.CircleWrapper}>
        <Image
          className={styles.CircleWrapper__image}
          src={pic}
          width="400"
          height="400"
        />
        <div className={styles.CircleWrapper__body}>
          <h2 className={styles.Container__title}>Contacto</h2>
          <p>Santiago de Chile</p>
          <p>828083838</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
