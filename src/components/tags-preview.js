import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export const TagsPreview = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag.id} className={styles.tag}>
          <Link href={`/tag/${tag.id}`}>
            <a>
              <LocalOfferIcon /> {tag.name}{" "}
            </a>
          </Link>
        </span>
      ))}
    </>
  );
};
