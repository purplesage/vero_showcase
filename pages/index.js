import styles from "../styles/Home.module.css";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import ComprasInfo from "../components/ComprasInfo";
//todo: ask if this component should be featured in the app.
import Tips from "../components/Tips";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

import { fetchShoeList } from "../lib/util";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Home(props) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["shoeList"],
    queryFn: fetchShoeList,
    initialData: props.shoeList,
  });

  return (
    <div className={styles.container}>
      <Hero />
      <Collection productList={data} />
      {/* <ComprasInfo /> */}
      <Contacto />
      {/* <Tips /> */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const shoeList = await fetchShoeList();
  return { props: { shoeList } };
}
