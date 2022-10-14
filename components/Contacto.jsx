import React from "react";
import styles from "../styles/contacto.module.css";
import Image from "next/image";
import pic from "../public/contact1.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Contacto = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.CircleWrapper}>
        <Image
          className={styles.CircleWrapper__image}
          src={pic}
          width="300"
          height="300"
        />
        <div className={styles.CircleWrapper__body}>
          <h2 className={styles.Container__title}>¡Contáctanos!</h2>
          <div className={styles.Container__info}>
            <p>
              <HiLocationMarker className={styles.Info__svgIcon} />
              Santiago de Chile
            </p>
            <p>
              <BsFillTelephoneFill className={styles.Info__svgIcon} />
              828083838
            </p>
            <p>
              <AiFillInstagram className={styles.Info__svgIcon} />
              @vashti.cl
            </p>
            <p>
              <MdEmail className={styles.Info__svgIcon} />
              compras@vashti.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
