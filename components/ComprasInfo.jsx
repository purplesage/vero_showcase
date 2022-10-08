import React from "react";
import Image from "next/image";
import pic from "../public/shoping1.jpg";
import styles from "../styles/comprasInfo.module.css";

const ComprasInfo = () => {
  return (
    <div className={styles.Container}>
      <Image src={pic} width="100" height="100" />
      <p>Cómo comprar</p>
      <p>
        1-. Consulta toda la información necesaria antes de comprar; el modelo,
        la talla y el color.
      </p>
      <p>
        2-. Una vez confirmado tu pedido a través de whatsapp se agenda el día y
        la hora de entrega.
      </p>
      <p>
        3-. Puedes Cancelar por transferencia o efectivo al momento de la
        entrega.
      </p>
    </div>
  );
};

export default ComprasInfo;
