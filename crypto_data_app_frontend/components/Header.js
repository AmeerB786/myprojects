import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>This is a mini-website to collect and display real-time price data for different crypto</h1>
      <br></br>
      <br></br>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
