import Image from "next/image";
import styles from "./page.module.css";
import { AuthContextProvider } from "./context/Auth";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <h1>Home hello</h1>   
    </main>

  );
}
