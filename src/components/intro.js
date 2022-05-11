import styles from "../styles/Home.module.scss";

export default function Intro() {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.introTitle}>escalib.</h1>
      <h4 className={styles.introSubTitle}>
        ～ web開発初心者によるweb技術の学習記録 ～
      </h4>
    </section>
  );
}
