import styles from "../styles/Home.module.css";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import ComprasInfo from "../components/ComprasInfo";
import Tips from "../components/Tips";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Collection />
      <ComprasInfo />
      <Tips />
      <Footer />
    </div>
  );
}
