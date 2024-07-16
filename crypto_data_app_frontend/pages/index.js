import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <section className={styles.section}>
      <h7 className={styles.h3}>Click to displays all real-time data for different crypto{" "}</h7>
          <Link href="/crypto">
            here
          </Link>
    </section>
  );
}
