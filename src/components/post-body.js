import styles from "../styles/Home.module.scss";

export default function PostBody({ content }) {
  function createMrkup() {
    return {
      __html: content.map((blog) => blog.field).join(" "),
    };
  }

  return (
    <>
      <div className={styles.post} dangerouslySetInnerHTML={createMrkup()} />
    </>
  );
}
