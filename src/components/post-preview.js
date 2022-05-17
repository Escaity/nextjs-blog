import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { TagsPreview } from "./tags-preview";
// 記事構成用

export default function PostPreview({ id, title, tags, createdAt }) {
  return (
    <div className={styles.previewForm}>
      <div>
        <span>{new Date(createdAt).toLocaleDateString()} </span>
        <TagsPreview tags={tags} />
        <Link href={`/blog/${id}`}>
          <h3>{title}</h3>
        </Link>
      </div>
    </div>
  );
}
