import PostPreview from "./post-preview";

// 記事一覧表示用
export default function MoreStroies({ posts }) {
  return (
    <section>
      <h2>記事一覧</h2>
      <div>
        {posts.map((blog) => (
          <PostPreview
            key={blog.body} /* keyがないとエラーになる */
            id={blog.id}
            title={blog.title}
            createdAt={blog.createdAt}
          />
        ))}
      </div>
    </section>
  );
}
