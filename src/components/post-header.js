import styles from "../styles/Home.module.scss";

export default function PostHeader({
  title,
  publishedAt,
  updatedAt,
  author,
  tags,
}) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <>
        投稿日：{new Date(publishedAt).toLocaleDateString()}
        　　最終更新日：
        {new Date(updatedAt).toLocaleDateString()}　
        {tags.map((tag) => (
          <span className={styles.tag} key={tag.id}>
            #{tag.name}
          </span>
        ))}
      </>
    </>
  );
}
