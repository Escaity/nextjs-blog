import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Intro() {
  return (
    <section className={styles.introSection}>
      <Link href={"/"}>
        <h1 className={styles.introTitle}>escalib.</h1>
      </Link>
      <h4 className={styles.introSubTitle}>
        ～ web開発初心者によるweb技術の学習記録 ～
      </h4>
    </section>
  );
}
