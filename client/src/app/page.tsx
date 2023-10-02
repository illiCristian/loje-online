import Image from "next/image";
import styles from "./page.module.css";
import { FilterBar } from "@/components/navbar/filter-bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  );
}
