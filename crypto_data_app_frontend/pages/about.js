import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <p>
        <br></br>
        <br></br>The repo for this mini-website app can be found{" "}
        <a
          className={styles.a}
          target="_blank"
          rel=""
          href="https://github.com/AmeerB786"
        >
          here
        </a>
        .<br></br>
      </p>
    </section>
  );
}
