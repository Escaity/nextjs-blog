import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";

export default function Home({ blog }) {
  return (
    <div >
      <main className={styles.main}>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
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
  const data = await client
    .get({
      endpoint: "blog"
    });

  return {
    props: {
      blog: data.contents,
    },
  };
};
