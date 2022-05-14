import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME, ENTRY_PER_PAGE } from "../libs/constants";
import Intro from "../components/intro";
import MoreStroies from "../components/more-stories";
import { Pagination } from "../components/pagination";

export default function Home({ blog, totalCount }) {
  return (
    <>
      <Layout>
        <Head>
          <title>escalib.</title>
          Next.js と {CMS_NAME} で作られたブログです。
        </Head>
        <main className={styles.main}>
          <Intro />
          {blog.length > 0 && <MoreStroies posts={blog} />}
          <Pagination totalCount={totalCount} />
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: 0, limit: ENTRY_PER_PAGE },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
