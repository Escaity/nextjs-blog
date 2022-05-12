import styles from "../styles/Home.module.scss";
import { client } from "../libs/client";
import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../libs/constants";
import Intro from "../components/intro";
import MoreStroies from "../components/more-stories";

export default function Home({ blog }) {
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
        </main>
      </Layout>
    </>
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
