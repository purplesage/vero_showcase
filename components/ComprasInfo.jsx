import React from "react";
import Image from "next/image";
import pic from "../public/shoping1.jpg";
import styles from "../styles/comprasInfo.module.css";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GiConverseShoe } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiCashapp } from "react-icons/si";

const ComprasInfo = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__imageWrapper}>
        <BsPatchQuestionFill
          className={styles.Container__imageWrapper__questionMark}
        />
        <Image
          className={styles.Container__imageWrapper__image}
          src={pic}
          width="300"
          height="300"
        />
        <h3 className={styles.Body__title}>¿Cómo comprar?</h3>
      </div>

      <div className={styles.Body}>
        <ol className={styles.Body__list}>
          <li className={styles.Body__list__listItem}>
            <span>1</span>
            <p>
              Consulta toda la información necesaria antes de comprar; el
              modelo, la talla y el color.
            </p>
            <GiConverseShoe className={styles.listItem__svg} />
          </li>
          <li className={styles.Body__list__listItem}>
            <span>2 </span>
            <p>
              Una vez confirmado tu pedido a través de whatsapp se agenda el día
              y la hora de entrega.
            </p>
            <IoLogoWhatsapp className={styles.listItem__svg} />
          </li>
          <li className={styles.Body__list__listItem}>
            <span>3</span>
            <p>
              Puedes Cancelar por transferencia o efectivo al momento de la
              entrega.
            </p>
            <SiCashapp
              className={styles.listItem__svg}
              style={{ marginTop: "1.3rem" }}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ComprasInfo;
