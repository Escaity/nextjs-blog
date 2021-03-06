import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME, ENTRY_PER_PAGE } from "../libs/constants";
import Intro from "../components/intro";
import MoreStroies from "../components/more-stories";
import { Pagination } from "../components/pagination";
import Link from "next/link";
import { TagList } from "../components/tagList";

export default function Home({ blog, totalCount, tags }) {
  return (
    <>
      <Intro />
      <Layout>
        <Head>
          <title>escalib.</title>
          Next.js と {CMS_NAME} で作られたブログです。
        </Head>
        <main className={styles.main}>
          <h2>記事一覧</h2>
          {blog.length > 0 && <MoreStroies posts={blog} />}
          <Pagination totalCount={totalCount} />
        </main>
        <aside className={styles.aside}>
          <TagList tags={tags} />
        </aside>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: ENTRY_PER_PAGE },
  });

  const tagsData = await client.get({ endpoint: "tags" });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      tags: tagsData.contents,
    },
  };
};
