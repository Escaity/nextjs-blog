import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "../styles/Home.module.scss";

// webページ全体の大枠をここで決める
export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
}
