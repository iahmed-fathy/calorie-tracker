import noResultImg from "/src/assets/no-results.png";
import styles from "./NoResultFound.module.css";

export default function NoResultFound() {
  return (
    <div className={styles.noResult}>
      <img src={noResultImg} alt="" />
      <h2>No Result Found</h2>
      <p>We couldn't find what you searched for.</p>
      <p>Try searching again.</p>
    </div>
  );
}
