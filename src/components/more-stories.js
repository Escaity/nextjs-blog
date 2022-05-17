import PostPreview from "./post-preview";
import styles from "../styles/Home.module.scss";
// 記事一覧表示用
export default function MoreStroies({ posts }) {
  return (
    <section className={styles.postList}>
      <div>
        {posts.map((blog) => (
          <PostPreview
            key={blog.body} /* keyがないとエラーになる */
            id={blog.id}
            title={blog.title}
            tags={blog.tag}
            createdAt={blog.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
