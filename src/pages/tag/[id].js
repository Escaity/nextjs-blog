import styles from "../../styles/Home.module.scss";
import { client } from "../../libs/client";
import Link from "next/link";
import Layout from "../../components/layout";
import Intro from "../../components/intro";
import MoreStroies from "../../components/more-stories";
import Head from "next/head";
import { CMS_NAME, ENTRY_PER_PAGE } from "../../libs/constants";
import { useRouter } from "next/router";
import { Router } from "@material-ui/icons";

// /tagsディレクトリにタグを一覧表示
export default function TagId({ blog, tags }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Head>
          <title>escalib.</title>
          Next.js と {CMS_NAME} で作られたブログです。
        </Head>
        <main className={styles.main}>
          <Intro />
          <h3>
            <Link href={"/"}>記事一覧</Link>
            {blog.length > 0 && router.query["id"] === blog[0].tag[0].id
              ? ` > ${blog[0].tag[0].name}`
              : "コンテンツがありません。"}
          </h3>
          {blog.length > 0 && <MoreStroies posts={blog} />}
        </main>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });

  const paths = data.contents.map((content) => `/tag/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `tag[contains]${id}` },
  });

  const tagsData = await client.get({ endpoint: "tags" });

  return {
    props: {
      blog: data.contents,
      tags: tagsData.contents,
    },
  };
};
