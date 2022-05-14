import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

export const CurrentPage = ({ current }) => {
  const router = useRouter();
  const currentPath = `/blog/page/${current}`;
  let id = Object.values(router.query)[0];
  console.log(id);
  return (
    <Link href={currentPath}>
      <a
        className={
          /* 取得したパスと現在パスが等しいならばクラス名を"current"、そうでなければ"page"とする */
          router.asPath === currentPath ? styles.current : styles.page
        }
      >
        {current}
      </a>
    </Link>
  );
};
