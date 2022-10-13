import styles from "../styles/Home.module.css";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import ComprasInfo from "../components/ComprasInfo";
//todo: ask if this component should be featured in the app.
import Tips from "../components/Tips";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Collection />
      <ComprasInfo />
      <Contacto />
      {/* <Tips /> */}
      <Footer />
    </div>
  );
}

// 72D0EA
