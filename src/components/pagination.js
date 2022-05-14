import { ENTRY_PER_PAGE } from "../libs/constants";
import styles from "../styles/Home.module.scss";
import { CurrentPage } from "./current-page";

export const Pagination = ({ totalCount }) => {
  // 1ページに表示する記事数
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const first = 1;
  const last = Math.ceil(totalCount / ENTRY_PER_PAGE);

  return (
    <div className={styles.pagination}>
      <ul>
        {range(first, last).map(
          (
            number,
            index /* map()の第二引数でenumerate()のようなことをしている */
          ) => (
            <li id={number} key={index}>
              <CurrentPage current={number} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
