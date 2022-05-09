import Header from "../../components/header";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

export default function BlogId({ blog }) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>
          投稿日：{new Date(blog.publishedAt).toLocaleDateString()}
          　最終更新日：
          {new Date(blog.updatedAt).toLocaleDateString()}
        </p>
        <div>
          {blog.tag.map((tag) => (
            <span className={styles.tag} key={tag.id}>
              #{tag.name}
            </span>
          ))}
        </div>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
