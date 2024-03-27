import Image from "next/image";
import styles from "./page.module.css";
import { AuthContextProvider } from "./context/Auth";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home hello</h1>   
    </main>

  );
}
