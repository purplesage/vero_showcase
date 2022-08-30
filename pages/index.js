import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Home page</p>
      <Link href="/collection">
        <a>See collection</a>
      </Link>
    </div>
  );
}
