import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";
import Header from "../components/header";

export default function Home({ blog }) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              {new Date(blog.createdAt).toLocaleDateString()}　
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    //queries: { limit: 1 },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
