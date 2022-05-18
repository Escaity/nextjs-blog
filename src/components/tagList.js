import Link from "next/link";
import styles from "../styles/Home.module.scss";

export const TagList = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <h3>タグ一覧</h3>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link key={tag.id} href={`/tag/${tag.id}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
