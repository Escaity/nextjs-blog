import Link from "next/link";
import styles from "../styles/Home.module.scss";
// 記事構成用

export default function PostPreview({ id, title, createdAt }) {
  return (
    <div className={styles.previewForm}>
      <Link href={`/blog/${id}`}>
        <div>
          <div>{new Date(createdAt).toLocaleDateString()}</div>
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
