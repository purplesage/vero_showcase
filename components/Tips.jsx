import React from "react";
import styles from "../styles/tips.module.css";
import { GiHighHeel } from "react-icons/gi";

const Tips = () => {
  return (
    <div className={styles.Container}>
      <GiHighHeel className={styles.Container__backgroundSVG} />
      <h3 className={styles.Container__title}>Recomendaciones de tallas</h3>

      <ul className={styles.Container__list}>
        <li className={styles.Container__listItem}>
          Tomar la medida de tus pies con una cinta métrica para indicarte tu
          talla ideal o...
        </li>
        <li className={styles.Container__listItem}>
          Puedes observar en cada producto, las tallas de cada modelo
          equivalente a tus centimetros de pies.
        </li>
      </ul>
      <p className={styles.Container__final}>Si tienes dudas, consulta.</p>
    </div>
  );
};

export default Tips;
