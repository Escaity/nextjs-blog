import Header from "../../components/header";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import PostHeader from "../../components/post-header";
import Prism from "prismjs";
import { useEffect } from "react";

export default function BlogId({ blog }) {
  // Prismのシンタックスハイライトを適用する
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <Header />
        <>
          <article>
            <Head>
              <title>{blog.title}</title>
            </Head>
            <PostHeader
              title={blog.title}
              publishedAt={blog.publishedAt}
              updatedAt={blog.updatedAt}
              author="Escaity"
              tags={blog.tag}
            />
            <PostBody content={blog.body} />
          </article>
        </>
      </main>
    </Layout>
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
