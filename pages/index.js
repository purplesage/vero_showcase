import styles from "../styles/Home.module.css";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import ComprasInfo from "../components/ComprasInfo";
//todo: ask if this component should be featured in the app.
import Tips from "../components/Tips";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";

import { useQuery, useQueryClient } from "react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const { data } = useQuery("productList", async () => {
    const ref = doc(dataBase, `db/products`);
    const document = await getDoc(ref);
    const productList = document.data().productList;

    return productList;
  });

  return (
    <div className={styles.container}>
      <Hero />
      <Collection productList={data} />
      <ComprasInfo />
      <Contacto />
      {/* <Tips /> */}
      <Footer />
    </div>
  );
}
