import Link from "next/link";
import styles from "../styles/Home.module.scss";
// 記事構成用

export default function PostPreview({ id, title, createdAt }) {
  return (
    <div className={styles.previewForm}>
      <div>{new Date(createdAt).toLocaleDateString()}</div>
      <div>
        <h3>
          <Link href={`/blog/${id}`}>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
