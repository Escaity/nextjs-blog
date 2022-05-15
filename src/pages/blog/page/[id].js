import Layout from "../../../components/layout";
import { Pagination } from "../../../components/pagination";
import { client } from "../../../libs/client";
import Head from "next/head";
import { CMS_NAME, ENTRY_PER_PAGE } from "../../../libs/constants";
import styles from "../../../styles/Home.module.scss";
import Intro from "../../../components/intro";
import MoreStroies from "../../../components/more-stories";

export default function BlogPageId({ blog, totalCount }) {
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

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const first = 1;
  const last = Math.ceil(repos.totalCount / ENTRY_PER_PAGE);

  const paths = range(first, last).map((repo) => `/blog/page/${repo}`);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { offset: (id - 1) * ENTRY_PER_PAGE, limit: ENTRY_PER_PAGE },
  });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
