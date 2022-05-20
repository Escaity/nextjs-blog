import styles from "../styles/Home.module.scss";
import { TagsPreview } from "./tags-preview";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export default function PostHeader({
  title,
  publishedAt,
  updatedAt,
  author,
  tags,
}) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <>
        投稿日：{new Date(publishedAt).toLocaleDateString()}
        　　最終更新日：
        {new Date(updatedAt).toLocaleDateString()}　
        <LocalOfferIcon /> <TagsPreview tags={tags} />
      </>
    </>
  );
}
