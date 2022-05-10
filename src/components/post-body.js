import styles from "../styles/Home.module.scss";

export default function PostBody({ content }) {
  function createMrkup() {
    return { __html: content };
  }

  return (
    <>
      <div className={styles.post} dangerouslySetInnerHTML={createMrkup()} />
    </>
  );
}
