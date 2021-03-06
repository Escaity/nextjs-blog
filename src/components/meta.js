import Head from "next/head";
import { CMS_NAME } from "../libs/constants";

// Head 要素をここに書く
export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="description"
        content={`このブログは Next.js のサンプルと ${CMS_NAME} のチュートリアルを元に作成しました。主にweb技術に関する学習記録を書いています。Web技術に関しては初学者で勉強中です。`}
      />
    </Head>
  );
}
