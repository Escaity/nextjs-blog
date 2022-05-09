import styles from "../../styles/Home.module.scss";
import { client } from "../../libs/client";
import Link from "next/link";
// /tagsディレクトリにタグを一覧表示
export default function Tags({ tags }) {
  return (
    <div className={styles.main}>
      <h1>Tags</h1>
      <ul>
        {tags.map((t) => (
          <li key={t.id}>
            <Link href={`/tags/${t.id}`}>
              <a>{t.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "tags",
  });

  return {
    props: {
      tags: data.contents,
    },
  };
};
